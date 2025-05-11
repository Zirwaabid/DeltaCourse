import { useState } from "react"
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
export default function Lottery({n=3,winningSum=15}) {
    const [ticket, setTicket] = useState(genTicket(n));
    const isWinning = sum(ticket) === winningSum;
    const newTicket=()=>{
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
           <Ticket ticket={ticket}/>
            <button onClick={newTicket}>Buy new ticket</button>
            <br />
            <h3>{isWinning && "Congratulations! You Won"}</h3>
        </div>
    )
}
