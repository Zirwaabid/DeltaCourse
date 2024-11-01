// question # 01 
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me"
let body = document.querySelector("body");
body.appendChild(input)
body.appendChild(btn)

// question 02
input.placeholder = "Username";
btn.setAttribute("id", "btn");

// question 03
// style.css 

// question 04 
let h1 = document.createElement("h1");
body.appendChild(h1)
h1.innerText = "DOM Practice";
h1.classList.add("h1")

// question 05
let para = document.createElement("p")
para.innerHTML = "Apna College <b> Delta </b> Practice"
body.appendChild(para)
