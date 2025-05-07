import { useSelector } from "react-redux";
import { currentRaceInfoSelector } from "~/state/bets/selectors";
import { gamesSelector } from "~/state/games/selectors";
import type { Bet } from "~/state/bets/state";

import { GameDisplay } from "../GameDisplay/GameDisplay";

import styles from "./styles.module.css";

type Props = { bet: Bet };

export function BetDisplay({ bet }: Props) {
    const raceInfo = useSelector(currentRaceInfoSelector);
    const games = useSelector(gamesSelector);

    let content = null;

    if (raceInfo.status === 'loading') {
        content = <p>Laddar senaste resultat för {bet}...</p>;
    }

    if (raceInfo.status === 'failure') {
        content = <p>Kunde inte ladda senaste resultat för {bet}</p>;
    }

    if (raceInfo.status === 'success') {
        content = <strong>{raceInfo.trackNames.join(', ')} - {new Date(raceInfo.startTime).toLocaleTimeString().substring(0, 5)}</strong>;
    }

    return <div className={styles.wrapper}>
        {content}
        {Object.values(games).map(game => <GameDisplay key={game.id} game={game} />)}
    </div>;
}
