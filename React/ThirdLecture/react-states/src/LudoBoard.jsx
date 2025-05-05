import { useState } from "react"
export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
    const [arr, setArr] = useState([""]);

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        })
        setArr((prevArr) => {
            {
                return [...prevArr, "Blue Moves"]
            };
        });
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        })
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        })
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        })
    };
    
    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}