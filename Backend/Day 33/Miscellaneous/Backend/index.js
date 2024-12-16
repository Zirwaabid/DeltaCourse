const express = require("express");
const app = express()

let port = 8080;

app.get("/request", (req, res) => {
    let { user, password } = req.query;
    res.send(`valid get response and welcome ${user}`)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/request", (req, res) => {
    let { user, password } = req.body;
    res.send(`valid post response and welcome ${user}`)
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
