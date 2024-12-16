const express = require("express");
const app = express();
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
let port = 8080;

app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal })
});

app.get("/ig/:username", (req, res) => {
    const followers = ["Chris", "Ronal", "Minal", "jerry"]
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
