import { createReducer } from "@reduxjs/toolkit";
import type { BetState } from "./state";
import { loadBetAction, loadBetFailure, loadBetSuccess } from "./actions";
import { initialState } from "./state";

export const betsReducer = createReducer<BetState>(initialState, (builder) => {
    builder.addCase(loadBetAction, (state, action) => {
        state.currentBet = action.payload;
        state.bets[action.payload].status = 'loading';
    });

    builder.addCase(loadBetSuccess, (state, action) => {
        state.bets[action.payload.betType] = action.payload;
        state.bets[action.payload.betType].status = 'success';
    });

    builder.addCase(loadBetFailure, state => {
        state.bets[state.currentBet].status = 'failure';
    });
});