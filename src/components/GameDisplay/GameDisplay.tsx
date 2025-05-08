import type { Race } from "src/state/games/types";

import styles from "./styles.module.css";

type Props = Readonly<{
    game: Race;
}>;

export function GameDisplay({ game }: Props) {
    return <article key={game.id} className={styles.gameDisplay}>
        <header>
            <span className={styles.digit}>{game.number}</span>
            <span>{game.name}</span>
            <span>{new Date(game.scheduledStartTime).toLocaleTimeString().substring(0, 5)}</span>
        </header>
        <div className={styles.gameDisplayContent}>
            {game.starts.map(start => <div key={start.id}>
                <details>
                    <summary><span className={styles.digit}>{start.number}</span> <strong>{start.horse.name}</strong> — {start.driver.firstName} {start.driver.lastName}</summary>
                    <dl>
                        <dt>Tränare</dt>
                        <dd>{start.horse.trainer.firstName} {start.horse.trainer.lastName}</dd>
                        <dt>Far</dt>
                        <dd>{start.horse.pedigree.father.name}</dd>
                    </dl>
                </details>
            </div>)}
        </div>
    </article>;
}