// async keyword
async function greet() {
    throw "page not found"
    return "hello"
};
greet()
    .then((result) => {
        console.log("result is", result)
    }).catch((err) => {
        console.log("error is", err)
    })

//await kewword
function getNum() {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10) + 1
        setTimeout(() => {
            console.log(num)
            resolve();
        }, 1000);
    })
}

async function demo() {
    await getNum()
    await getNum()
    await getNum()
    await getNum()
}

//async await function
let h1 = document.querySelector("h1")
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve()
        }, delay);
    })
}
async function change() {
    await changeColor("red", 1000)
    await changeColor("orange", 1000)
    await changeColor("blue", 1000)
}
change()