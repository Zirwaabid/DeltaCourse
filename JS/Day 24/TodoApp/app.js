const btn = document.querySelector("button")
const inp = document.querySelector("input")
const ul = document.querySelector("ul")

btn.addEventListener("click", function () {
    const item = document.createElement("li")
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn)
    ul.appendChild(item)
    inp.value = ""
})

const delBtns = document.querySelectorAll(".delete");
for (const delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
        console.log("delete");
    })
}