import type { Race } from "./types";

export type GamesState = Readonly<{
    games: Record<string, Race>;
    status: 'idle' | 'loading' | 'success' | 'failure';
    error: Error | null;
}>;

export const initialState: GamesState = {
    games: {},
    status: 'idle',
    error: null,
};
