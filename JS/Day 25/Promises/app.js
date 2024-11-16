// 01 example of promises

// function saveDt(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success:Your data was saved")

//         } else {
//             reject("failure:weak connection")
//         }
//     })
// }

// saveDt("Zirwa")
//     .then((result) => {
//         console.log("data1 saved")
//         console.log("result of promises:", result)
//         return saveDt("Abid");
//     })
//     .then((result) => {
//         console.log("data2 saved")
//         console.log("result of promises:", result)
//         return saveDt("Anas");
//     })
//     .then((result) => {
//         console.log("data3 saved")
//         console.log("result of promises:", result)
//         return saveDt("Azra");
//     })
//     .catch((error) => {
//         console.log("rejected")
//         console.log("result of promises:", error)
//     })

// 02 example of promises
let h1 = document.querySelector("h1");
function changeCol(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color
            resolve("color changed")
        }, delay);

    })
}
changeCol("red", 1000)
    .then(() => {
        console.log("red")
        return changeCol("green", 1000)
    }).then(() => {
        console.log("green")
        return changeCol("orange", 1000)
    }).then(() => {
        console.log("orange")
        return changeCol("blue", 1000)
    }).then(() => {
        console.log("blue")
    })