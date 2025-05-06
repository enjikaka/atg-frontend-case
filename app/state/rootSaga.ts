import { all, fork } from 'redux-saga/effects';
import { rootSaga as horsesRootSaga } from './horses/sagas.ts';

export function* rootSagas() {
    yield all([
        fork(horsesRootSaga),
    ]);
}
