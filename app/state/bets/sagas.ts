import { takeEvery, call, put } from "typed-redux-saga";
import { loadBetAction, loadBetFailure, loadBetSuccess } from "./actions";
import type { Bet } from "./state";
import type { RacingInfoResponse } from "./types";

async function fetchBets(bet: Bet): Promise<RacingInfoResponse> {
    const response = await fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${bet}`);

    return response.json();
}

function* loadBetsSaga(action: ReturnType<typeof loadBetAction>) {
    console.debug('loadBetsSaga', action);
    const bet = action.payload;

    try {
        const response = yield* call(fetchBets, bet);

        yield* put(loadBetSuccess({
            betType: bet,
            trackNames: response.results[0].tracks.map((track) => track.name),
            startTime: response.results[0].startTime,
        }));
    } catch (error) {
        yield* put(loadBetFailure(error as Error));
    }
}

export function* rootSaga() {
    yield takeEvery(loadBetAction, loadBetsSaga);
}