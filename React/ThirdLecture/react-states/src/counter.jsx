import { useEffect, useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const inCount = () => {
        setCounter(currCount => currCount + 1)
    }
    useEffect(function printSomething() {
        console.log("side-effect")
    })

    return <>
        <h2>Learn UseEffect()</h2>
        <h4>Counter: {counter}</h4>
        <button onClick={inCount}>Increase Count</button>
    </>
}