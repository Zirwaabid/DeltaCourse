const express = require("express");
const app = express();
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")

const session = require("express-session");
app.use(session({ secret: "mysupersecretstring", resave: false, saveUninitialized: true }))

// small activity
app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1
    }
    res.send(`You sent a request ${req.session.count} times`)
});
// app.get("/test", (req, res) => {
//     res.send("test successful")
// });

app.use("/users", users)
app.use("/posts", posts)

app.listen("3000", (req, res) => {
    console.log("app is listening on port 3000");
});