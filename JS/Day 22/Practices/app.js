let body = document.querySelector("body");

let container = document.createElement("div");
body.prepend(container)
container.classList.add("container")

let para = document.createElement("p");
para.innerText = "Hi I'am Red";
para.style.color = "red";
container.prepend(para)

let h3 = document.createElement("h3")
h3.innerText = "I am a blue h3";
h3.style.color = "blue";
para.insertAdjacentElement('afterend', h3)

let div = document.createElement("div");
h3.insertAdjacentElement('afterend', div)
div.style.border = "2px solid black"
div.style.backgroundColor = "pink";

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.insertAdjacentElement('afterbegin', h1)

let para2 = document.createElement("p")
para2.innerText = "Me Too";
div.insertAdjacentElement('beforeend', para2)
