import type { CoreState } from "../state";

export const currentBetSelector = (state: CoreState) => state.bets.currentBet;
export const currentRaceInfoSelector = (state: CoreState) =>
	state.bets.bets[state.bets.currentBet];
