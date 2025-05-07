import type { Race } from "~/state/games/types";

import styles from "./styles.module.css";

type Props = Readonly<{
    game: Race;
}>;

export function GameDisplay({ game }: Props) {
    return <article key={game.id} className={styles.gameDisplay}>
        <header>
            <span>{game.number} — {game.name}</span>
            <span>{new Date(game.scheduledStartTime).toLocaleTimeString().substring(0, 5)}</span>
        </header>
    </article>;
}