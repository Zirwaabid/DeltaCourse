let btn = document.querySelector(".btn1");
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

let img = document.querySelector("img");

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", async () => {
    let data = await Dogsimg();
    img.src = data
})

let link = "https://dog.ceo/api/breeds/image/random";
async function Dogsimg() {
    try {
        let pictures = await axios.get(link);
        return pictures.data.message
    } catch (error) {
        console.log(error)
    }

}