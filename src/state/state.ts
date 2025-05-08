import type { BetState } from "./bets/state";
import { initialState as betsInitialState } from "./bets/state";
import { initialState as gamesInitialState } from "./games/state";
import type { GamesState } from "./games/state";

export interface CoreState {
    bets: BetState;
    games: GamesState;
}

export const initialState: CoreState = {
    bets: betsInitialState,
    games: gamesInitialState,
}
