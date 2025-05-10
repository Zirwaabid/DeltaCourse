import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./Helper";
export default function Lottery() {
    const [ticket, setTicket] = useState(genTicket(3));
    const isWinning = sum(ticket) === 15;
    const newTicket=()=>{
        setTicket(genTicket(3))
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <br />
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={newTicket}>Buy new ticket</button>
            <br />
            <h3>{isWinning && "COngratulations! You Won"}</h3>
        </div>
    )
}
