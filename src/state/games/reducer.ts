import { createReducer } from "@reduxjs/toolkit";
import type { GamesState } from "./state";
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions";
import { initialState } from "./state";

export const gamesReducer = createReducer<GamesState>(
	initialState,
	(builder) => {
		builder.addCase(loadAction, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(loadSuccessAction, (state, action) => {
			// Convert the API array to a record instead, more efficient for Redux
			state.games = Object.fromEntries(
				action.payload.map((val) => [val.id, val]),
			);
			state.status = "success";
		});

		builder.addCase(loadFailureAction, (state, action) => {
			state.status = "failure";
			state.error = action.payload;
		});
	},
);
