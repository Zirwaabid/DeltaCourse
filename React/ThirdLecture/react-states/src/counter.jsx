// useEffect
import { useEffect, useState } from "react"

export default function Counter() {
    const [counterx, setCounterx] = useState(0);
    const [countery, setCountery] = useState(0);
    const inCountx = () => {
        setCounterx(currCount => currCount + 1)
    }
    const inCounty = () => {
        setCountery(currCount => currCount + 1)
    }
    useEffect(function printSomething() {
        console.log("side-effect")
    },[counterx]) //dependencies (sideeffect only for countx)

    return <>
        <h2>Learn UseEffect()</h2>
        <h4>Counterx: {counterx}</h4>
        <button onClick={inCountx}>Increase Countx</button>

        <h4>Countery: {countery}</h4>
        <button onClick={inCounty}>Increase County</button>
    </>
}