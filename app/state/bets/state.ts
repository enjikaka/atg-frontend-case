export type Bet = 'V75' | 'V86' | 'GS75';

export interface BetState {
    currentBet: Bet;
}

export const initialState: BetState = {
    currentBet: 'V75',
}
