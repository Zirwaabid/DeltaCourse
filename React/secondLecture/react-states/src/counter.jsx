import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    let inCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    )
}