import type { Bet } from "~/state/bets/state";

type Props = { bet: Bet };

export function BetDisplay({ bet }: Props) {
    return <div>
        <h1>{bet}</h1>
    </div>;
}
