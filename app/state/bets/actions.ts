import { createAction } from "@reduxjs/toolkit";
import type { Bet, RaceInfo } from "./state";

export const loadBetAction = createAction<Bet, "bets/LOAD_BET">("bets/LOAD_BET");
export const loadBetSuccess = createAction<RaceInfo, "bets/LOAD_BET_SUCCESS">("bets/LOAD_BET_SUCCESS");
export const loadBetFailure = createAction<Error, "bets/LOAD_BET_FAILURE">("bets/LOAD_BET_FAILURE");