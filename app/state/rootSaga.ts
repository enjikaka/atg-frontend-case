import { all, fork } from 'redux-saga/effects';
import { rootSaga as betsRootSaga } from './bets/sagas.ts';
import { rootSaga as horsesRootSaga } from './horses/sagas.ts';

export function* rootSagas() {
    yield all([
        fork(betsRootSaga),
        fork(horsesRootSaga),
    ]);
}
