export type Bet = 'V75' | 'V86' | 'GS75';
export type BetStatus = 'idle' | 'loading' | 'success' | 'failure';

export type RaceInfo = Readonly<{
    status: BetStatus;
    betType: Bet;
    trackNames: string[];
    startTime: string;
}>;

export type BetState = Readonly<{
    currentBet: Bet;
    bets: Record<Bet, RaceInfo>;
}>;

export const initialState: BetState = {
    currentBet: 'V75',
    bets: {
        V75: {
            status: 'idle',
            betType: 'V75',
            trackNames: [],
            startTime: '',
        },
        V86: {
            status: 'idle',
            betType: 'V86',
            trackNames: [],
            startTime: '',
        },
        GS75: {
            status: 'idle',
            betType: 'GS75',
            trackNames: [],
            startTime: '',
        },
    }
}
