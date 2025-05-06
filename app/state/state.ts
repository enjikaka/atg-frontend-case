import type { BetState } from "./bets/state";
import { initialState as betsInitialState } from "./bets/state";

export interface CoreState {
    bets: BetState;
}

export const initialState: CoreState = {
    bets: betsInitialState,
}
