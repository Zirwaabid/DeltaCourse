let h1 = document.querySelector("h1")

//callBack hell

function ChangeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor()
    }, delay);
}
ChangeColor("red", 1000, () => {
    ChangeColor("orange", 1000, () => {
        ChangeColor("purple", 1000, () => {
            ChangeColor("pink", 1000, () => {
                ChangeColor("green", 1000)
            })
        })
    })
})