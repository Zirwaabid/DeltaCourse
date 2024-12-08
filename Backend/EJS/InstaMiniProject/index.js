const express = require("express");
const app = express();
let port = 8080;
const path = require("path");

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]

    if (data) {
        res.render("insta.ejs", { data })
    } else {
        res.render("error.ejs")
    }
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});
