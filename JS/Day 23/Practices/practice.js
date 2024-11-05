const heading = document.querySelector("h1");
const btn = document.querySelector("button")
const para = document.querySelector(".box");
btn.addEventListener("click", function () {
    randomColor = generateRandomColor();
    heading.innerText = randomColor;
    para.style.backgroundColor = randomColor;

})
function generateRandomColor() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    let random = `rgb(${a}, ${b}, ${c})`
    return random
}



