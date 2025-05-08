import { describe, it, expect } from "vitest";
import { loadAction, loadFailureAction, loadSuccessAction } from "./actions";
import { betsReducer } from "./reducer";
import { initialState } from "./state";

describe("loadAction", () => {
	it("sets status to loading and currentBet to the bet type", () => {
		const action = loadAction("V75");
		const newState = betsReducer(initialState, action);

		expect(newState.currentBet).toBe("V75");
		expect(newState.bets.V75.status).toBe("loading");
	});
});

describe("loadSuccessAction", () => {
	it("sets status to success and updates the bet type", () => {
		const action = loadSuccessAction({
			betType: "V75",
			trackNames: ["Track 1", "Track 2"],
			startTime: "2021-01-01T00:00:00.000Z",
		});
		const newState = betsReducer(initialState, action);

		expect(newState.bets.V75.status).toBe("success");
		expect(newState.bets.V75.trackNames).toStrictEqual(["Track 1", "Track 2"]);
		expect(newState.bets.V75.startTime).toBe("2021-01-01T00:00:00.000Z");
	});
});

describe("loadFailureAction", () => {
	it("sets status to failure", () => {
		const action = loadFailureAction(new Error("Test error"));
		const newState = betsReducer(initialState, action);

		expect(newState.bets.V75.status).toBe("failure");
	});
});
