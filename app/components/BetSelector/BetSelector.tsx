import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { Bet } from "../../state/bets/state";
import { loadBetAction } from "../../state/bets/actions";
import { currentBetSelector } from "~/state/bets/selectors";

export function BetSelector() {
    const dispatch = useDispatch();
    const bet = useSelector(currentBetSelector);

    const bets: Array<Bet> = ['V75', 'V86', 'GS75'];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(loadBetAction(e.target.value as Bet));
    }

    return <select onInput={handleChange} defaultValue={bet}>
        {bets.map(bet => <option key={bet} value={bet}>{bet}</option>)}
    </select>;
}
