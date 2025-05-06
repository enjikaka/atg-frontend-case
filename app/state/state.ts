import type { BetState } from "./bets/state";
import { initialState as betsInitialState } from "./bets/state";

interface CoreState {
    bets: BetState;
}

export const initialState: CoreState = {
    bets: betsInitialState,
}
