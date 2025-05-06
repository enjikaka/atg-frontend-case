import type { Route } from "./+types/home";

import { useSelector } from "react-redux";
import { currentBetSelector } from "../state/bets/selectors";

import { BetSelector } from "../components/BetSelector/BetSelector";
import { BetDisplay } from "../components/BetDisplay/BetDisplay";

import styles from "./home.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ATG Front-end Case" },
    { name: "description", content: "Check the bets!" },
  ];
}

export default function Home() {
  const bet = useSelector(currentBetSelector);

  return <>
    <header className={styles.header}>
      <h1>ATG Front-end Case</h1>
    </header>
    <div className={styles.card}>
      <BetSelector />
      <BetDisplay bet={bet} />
    </div>
  </>;
}
