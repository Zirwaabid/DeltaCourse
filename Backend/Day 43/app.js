const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("hi i am a middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Hi i am a root");
});
app.get("/random", (req, res) => {
    res.send("Hi i am random");
})

app.listen("8080", () => {
    console.log("app is listening on port 8080");
})