import { takeEvery, call, put, race, take } from "typed-redux-saga";
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions";
import { loadAction as loadGamesAction, loadFailureAction as loadGamesFailureAction, loadSuccessAction as loadGamesSuccessAction } from "~/state/games/actions";
import type { Bet } from "./state";
import type { RacingInfoResponse } from "./types";

export async function fetchBets(bet: Bet): Promise<RacingInfoResponse> {
    const response = await fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${bet}`);

    return response.json();
}

export function* loadBetsSaga(action: ReturnType<typeof loadAction>) {
    const bet = action.payload;

    try {
        const response = yield* call(fetchBets, bet);

        yield* put(loadGamesAction(response.results[0].id));

        const { success, failure } = yield* race({
            success: take(loadGamesSuccessAction),
            failure: take(loadGamesFailureAction),
        });

        if (success) {
            yield* put(loadSuccessAction({
                betType: bet,
                trackNames: response.results[0].tracks.map((track) => track.name),
                startTime: response.results[0].startTime,
            }));
        }

        if (failure) {
            yield* put(loadFailureAction(failure.payload));
        }
    } catch (error) {
        yield* put(loadFailureAction(error as Error));
    }
}

export function* rootSaga() {
    yield takeEvery(loadAction, loadBetsSaga);
}