import { useSelector } from "react-redux";
import { currentBetSelector } from "src/state/bets/selectors";

import { BetSelector } from "src/components/BetSelector/BetSelector";
import { BetDisplay } from "src/components/BetDisplay/BetDisplay";

import styles from "./styles.module.css";


export function Main() {
    const bet = useSelector(currentBetSelector);

    return (
        <>
            <header className={styles.header}>
                <h1>ATG Front-end Case</h1>
            </header>
            <div className={styles.card}>
                <BetSelector />
                <BetDisplay bet={bet} />
            </div>
        </>
    );
}