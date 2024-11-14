const btn = document.querySelector("button")
const inp = document.querySelector("input")
const ul = document.querySelector("ul")

btn.addEventListener("click", function () {
    let item = document.createElement("li")
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function (evt) {
    if (evt.target.nodeName == "BUTTON") {
        let parElem = evt.target.parentElement;
       parElem.remove()
       console.log("deleted")
    }
})