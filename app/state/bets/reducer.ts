import { createReducer } from "@reduxjs/toolkit";
import type { BetState } from "./state";
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions";
import { initialState } from "./state";

export const betsReducer = createReducer<BetState>(initialState, (builder) => {
    builder.addCase(loadAction, (state, action) => {
        state.currentBet = action.payload;
        state.bets[action.payload].status = 'loading';
    });

    builder.addCase(loadSuccessAction, (state, action) => {
        state.bets[action.payload.betType] = {
            ...state.bets[action.payload.betType],
            ...action.payload,
            status: 'success',
        };
    });

    builder.addCase(loadFailureAction, state => {
        state.bets[state.currentBet].status = 'failure';
    });
});