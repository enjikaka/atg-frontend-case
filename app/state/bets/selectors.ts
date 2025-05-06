import type { BetState } from "./state";

export const currentBetSelector = (state: CoreState) => state.bets.currentBet;