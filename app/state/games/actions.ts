import { createAction } from "@reduxjs/toolkit";
import type { GamesResponse } from "./types.ts";

export const loadAction = createAction<string, "games/LOAD">("games/LOAD");
export const loadSuccessAction = createAction<GamesResponse, "games/LOAD__SUCCESS">("games/LOAD__SUCCESS");
export const loadFailureAction = createAction<Error, "games/LOAD__FAILURE">("games/LOAD__FAILURE");
