const square = (n) => n * n;
console.log(square(2));

let id = setInterval(() => {
    console.log("hello World")
}, 1000);
setTimeout(() => {
    clearInterval(id)
    console.log("clear interval ran")
}, 5000)