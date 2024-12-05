const express = require("express");
let app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
});

// app.use((req, res) => {
//     console.log("request received")
//     // res.send("this is a basic response")
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // })
//     let code = "<h1>Fruits</h1><ul><li>Apple</li></ul>"
//     res.send(code);
// })

// get req 
app.get("/", (req, res) => {
    res.send("contacted root path")
})
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
})
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
})
app.get("*", (req, res) => {
    res.send("This path does not exist");
})
// post req 
app.post("/", (req, res) => {
res.send("You send a post request");
})