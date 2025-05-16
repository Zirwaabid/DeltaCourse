import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password:""
    });
    //handle multiple inputs
    let handleInput = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password:""
        })
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleInput}
                id="fullName"
                name="fullName"
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter Username"
                value={formData.userName}
                onChange={handleInput}
                id="username"
                name="userName"
            />
  <br /><br />
             <label htmlFor="password">Password</label>
            <input
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInput}
                id="password"
                name="password"
            />
            <button>Submit</button>
        </form>
    </>
}