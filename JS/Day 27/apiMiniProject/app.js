let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

async function getUni(country) {
    try {
        let res = await axios.get(url + country);
        return res.data

    } catch (error) {
        console.log(error)
    }
}

let para = document.querySelector(".Result")
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getUni(country);
    show(colArr)
})

function show(colArr) {
    let ul = document.querySelector(".list");
    ul.innerText = "";
    for (const col of colArr) {
        let list = document.createElement("li");
        list.innerText = col.name;
        ul.appendChild(list)
    }
}