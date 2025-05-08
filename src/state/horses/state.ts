

export interface Horse {
  trainer: {
    firstName: string;
    lastName: string;
  },
  name: string,
  father: {
    name: string,
  }
}


export type HorsesState = Record<string, Horse>;

export const initialState: HorsesState = {};
