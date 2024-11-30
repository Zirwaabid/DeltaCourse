const int = document.querySelector("input");
const para = document.querySelector("p");
int.addEventListener("input", function () {
    console.log(int.value)
    para.innerText = int.value;
})