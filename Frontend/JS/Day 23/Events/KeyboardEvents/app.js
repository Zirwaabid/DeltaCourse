const btn = document.querySelector("button");
const inp = document.querySelector("input")

btn.addEventListener("click", function (event) {
    console.log(event)
})

inp.addEventListener("keydown", function (evt) {
    console.log("code=", evt.code) // ArrowUp,ArrowDown,ArrowRight,ArrowLeft
    if (evt.code == "ArrowUp") {
        console.log("Character moves Forward")
    } else if (evt.code == "ArrowDown") {
        console.log("Character moves Backward")
    } else if (evt.code == "ArrowLeft") {
        console.log("Character moves Left")
    } else if (evt.code == "ArrowRight") {
        console.log("Character moves Right")
    }
})
