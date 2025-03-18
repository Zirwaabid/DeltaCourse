const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/", (req, res) => {
    res.send("root page")
});
// express router 
app.use("/user", users)
app.use("/post", posts)

// cookies
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "Hi")
    res.send("sent you some cookies")
});

app.listen("3000", () => {
    console.log("app is listening on port 3000")
});

