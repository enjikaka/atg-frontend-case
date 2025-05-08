import { describe, it } from 'vitest';
import { expectSaga } from 'redux-saga-test-plan';
import { loadAction, loadFailureAction, loadSuccessAction } from './actions';
import { loadSuccessAction as loadGamesSuccessAction, loadFailureAction as loadGamesFailureAction } from 'src/state/games/actions';
import { loadBetsSaga, fetchBets } from './sagas';
import { mockedGame } from '../games/fixtures';

describe('loadBetsSaga', () => {
    it('emits success action when games are loaded', () => {
        expectSaga(loadBetsSaga, loadAction('V75'))
            .dispatch(loadGamesSuccessAction([mockedGame]))
            .put(loadSuccessAction({ betType: 'V75', trackNames: ['Track 1', 'Track 2'], startTime: '2021-01-01T00:00:00.000Z' }));
    });

    it('emits failure action when games are not loaded', () => {
        expectSaga(loadBetsSaga, loadAction('V75'))
            .dispatch(loadGamesFailureAction(new Error('Test error')))
            .put(loadFailureAction(new Error('Test error')));
    });

    it('emits failure action when fetching bets fails', () => {
        expectSaga(loadBetsSaga, loadAction('V75'))
            .call(fetchBets, 'V75')
            .throws(new Error('Test error'))
            .put(loadFailureAction(new Error('Test error')));
    });
});