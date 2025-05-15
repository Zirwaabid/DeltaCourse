import { use, useState } from "react"

export default function Form() {
    const [fullName, setFullName] = useState("dd");
    const HandleFullName = (event) => {
        setFullName(event.target.value);
    }
    return <>
        <form>
            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter your name"
                value={fullName}
                onChange={HandleFullName}
                id="username"
            />
            <button>Submit</button>
        </form>
    </>
}