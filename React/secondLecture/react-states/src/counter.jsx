import { useState } from "react";
function init() {
    console.log("init was executed")
    return Math.random();
}
export default function Counter() {
    const [count, setCount] = useState(init); //initialization
    console.log("component is re-executed");
    console.log(`count value=${count}`);
    let inCount = () => {
        setCount((currCount) => { //in case when state depends on curr value
            return currCount + 1
        })
        setCount((currCount) => {
            return currCount + 1
        })
    }
    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    )
}