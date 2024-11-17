let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let data = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = data;
})

let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact

    } catch (error) {
        console.log("error:", error)
    }
}