import { createReducer } from "@reduxjs/toolkit";
import type { BetState } from "./state";
import { loadBetAction } from "./actions";
import { initialState } from "./state";

export const betsReducer = createReducer<BetState>(initialState, (builder) => {
    builder.addCase(loadBetAction, (state, action) => {
        state.currentBet = action.payload;
    });
});