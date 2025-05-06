import { createAction } from "@reduxjs/toolkit";
import type { Bet } from "./state";

export const loadBetAction = createAction<Bet, "bets/LOAD_BET">("bets/LOAD_BET");
