import { use, useState } from "react"

export default function Comment() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });
    let handleFormChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    };
    let onSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            username: "",
            remarks: "",
            rating: ""
        })
    }
    return <>
        <h2>Give a Comment!</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleFormChange} />
            <br /><br />

            <label htmlFor="remarks">Remarks</label>
            <textarea type="text" placeholder="Add new remarks" id="remarks" name="remarks" value={formData.remarks} onChange={handleFormChange} />
            <br /><br />

            <label htmlFor="rating">Rating</label>
            <input placeholder="rating" type="number" min={1} max={5} id="rating" name="rating" value={formData.rating} onChange={handleFormChange} />
            <br /><br />

            <button>Add a Comment</button>
        </form>
    </>
}