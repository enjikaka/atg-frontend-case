import { takeEvery, call, put } from "typed-redux-saga";
import { loadAction, loadSuccessAction, loadFailureAction } from "./actions";
import type { GamesResponse } from "./types";

async function fetchGames(gameId: string): Promise<GamesResponse> {
    const response = await fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`);

    return response.json();
}

function* loadGamesSaga(action: ReturnType<typeof loadAction>) {
    console.debug('loadGamesSaga', action);
    const bet = action.payload;

    try {
        const response = yield* call(fetchGames, bet);

        yield* put(loadSuccessAction(response.races));
    } catch (error) {
        yield* put(loadFailureAction(error as Error));
    }
}

export function* rootSaga() {
    yield takeEvery(loadAction, loadGamesSaga);
}