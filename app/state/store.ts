import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import { horsesReducer } from './horses/reducer.ts';
import { betsReducer } from './bets/reducer.ts';
import { rootSagas } from './rootSaga.ts';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        bets: betsReducer,
        horses: horsesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSagas);
