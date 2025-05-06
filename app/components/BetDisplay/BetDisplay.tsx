import { useSelector } from "react-redux";
import { currentRaceInfoSelector } from "~/state/bets/selectors";
import type { Bet } from "~/state/bets/state";

type Props = { bet: Bet };

export function BetDisplay({ bet }: Props) {
    const raceInfo = useSelector(currentRaceInfoSelector);

    let content = null;

    if (raceInfo.status === 'loading') {
        content = <p>Laddar senaste resultat för {bet}...</p>;
    }

    if (raceInfo.status === 'failure') {
        content = <p>Kunde inte ladda senaste resultat för {bet}</p>;
    }

    if (raceInfo.status === 'success') {
        content = <div>
            <p>Banor: {raceInfo.trackNames.join(', ')}</p>
            <p>Starttid: {raceInfo.startTime}</p>
        </div>;
    }

    return <div>
        <h1>Senaste resultat för {bet}</h1>
        {content}
    </div>;
}
