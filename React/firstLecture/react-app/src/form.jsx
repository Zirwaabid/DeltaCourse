function handleFormBtn(event) {
    event.preventDefault()
    console.log("Form was submitted");
}

export default function Form() {
    return(
        <form onSubmit={handleFormBtn}>
            <input placeholder="Type something" />
            <button>Submit</button>
        </form>
    )
}