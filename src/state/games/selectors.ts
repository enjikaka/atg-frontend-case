import type { CoreState } from "../state";

export const gamesSelector = (state: CoreState) => state.games.games;

export const gameSelector = (state: CoreState, gameId: string) =>
	state.games.games[gameId];
