import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import type { Bet } from "../../state/bets/state";
import { loadBetAction } from "../../state/bets/actions";

export function BetSelector() {
    const dispatch = useDispatch();
    const [bet, setBet] = useState<Bet>("V75");

    useEffect(() => {
        dispatch(loadBetAction(bet));
    }, [bet, dispatch]);

    const bets: Array<Bet> = ['V75', 'V86', 'GS75'];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBet(e.target.value as Bet);
    }

    return <select onInput={handleChange} defaultValue={bet}>
        {bets.map(bet => <option key={bet} value={bet}>{bet}</option>)}
    </select>;
}
