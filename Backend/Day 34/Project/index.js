const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.listen(port, () => {
    console.log("app is listening on port");
})