import { createAction } from "@reduxjs/toolkit";
import type { Race } from "./types.ts";

export const loadAction = createAction<string, "games/LOAD">("games/LOAD");
export const loadSuccessAction = createAction<Race[], "games/LOAD__SUCCESS">("games/LOAD__SUCCESS");
export const loadFailureAction = createAction<Error, "games/LOAD__FAILURE">("games/LOAD__FAILURE");
