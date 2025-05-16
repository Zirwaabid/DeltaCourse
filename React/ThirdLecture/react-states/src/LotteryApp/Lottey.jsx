import { useState } from "react"
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./button";
export default function Lottery({ n = 3, winCondition }) {
    const [ticket, setTicket] = useState(genTicket(n));
    const isWinning = winCondition(ticket);
    const newTicket = () => {
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket} />
            <Button action={newTicket} />
            <br />
            <h3>{isWinning && "Congratulations! You Won"}</h3>
        </div>
    )
}
