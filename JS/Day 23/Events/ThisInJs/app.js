const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const para = document.querySelector("p");
const btn = document.querySelector("button");
function BackColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "cyan";
}
h1.addEventListener("click", BackColor);
h2.addEventListener("click", BackColor);
para.addEventListener("click", BackColor);
btn.addEventListener("click", BackColor);