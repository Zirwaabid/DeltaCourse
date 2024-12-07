const express = require("express");
const app = express();
let port = 8080;
const path = require("path");

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json")
    console.log(instaData)
    res.render("insta.ejs")
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});
