import { describe, it, expect } from "vitest";
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions";
import { gamesReducer } from "./reducer";
import { initialState } from "./state";
import { mockedGame } from "./fixtures";
describe('loadAction', () => {
    it('sets status to loading and currentBet to the bet type', () => {
        const action = loadAction('V75');

        const newState = gamesReducer(initialState, action);
        expect(newState.status).toBe('loading');
    });
});

describe('loadSuccessAction', () => {
    it('sets status to success and updates the bet type', () => {
        const action = loadSuccessAction([mockedGame]);
        const newState = gamesReducer(initialState, action);

        expect(newState.status).toBe('success');
        expect(newState.games[mockedGame.id]).toStrictEqual(mockedGame);
    });
});

describe('loadFailureAction', () => {
    it('sets status to failure', () => {
        const error = new Error('Test error');
        const action = loadFailureAction(error);
        const newState = gamesReducer(initialState, action);

        expect(newState.status).toBe('failure');
        expect(newState.error).toBe(error);
    });
});
