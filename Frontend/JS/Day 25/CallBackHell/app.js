let h1 = document.querySelector("h1")

//callBack hell

//01 example
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

//02 example

function saveDt(data, succes, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        succes()

    } else {
        failure()
    }
}

saveDt("Zirwa", () => {
    console.log("success1:your data was saved")
    saveDt("Abid", () => {
        console.log("success2:your data was saved")
        saveDt("Azra", () => {
            console.log("success3:your data was saved")
        }, () => {
            console.log("failure3:your data was not saved")
        })
    }, () => {
        console.log("failure2:your data was not saved")
    })
}, () => {
    console.log("failure1:your data was not saved")
})