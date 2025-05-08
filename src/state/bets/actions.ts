import { createAction } from "@reduxjs/toolkit";
import type { Bet, RaceInfo } from "./state";

export const loadAction = createAction<Bet, "bets/LOAD">("bets/LOAD");
export const loadSuccessAction = createAction<Omit<RaceInfo, 'status'>, "bets/LOAD__SUCCESS">("bets/LOAD__SUCCESS");
export const loadFailureAction = createAction<Error, "bets/LOAD__FAILURE">("bets/LOAD__FAILURE");
