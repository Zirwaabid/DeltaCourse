const express = require("express");
const app = express();
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")
const session = require("express-session");
const flash = require("connect-flash")
// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")

//for require views,public folder in every file use following code
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions));
app.use(flash())

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error")
    next();
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name === "anonymous") {
        req.flash("error", "user not registered")
    } else {
        req.flash("success", "user registered successfully!")
    }

    res.redirect("/hello");
})
app.get("/hello", (req, res) => {
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error")
    res.render("flash.ejs", { name: req.session.name, msg: req.flash("success") });
})

// // small activity
// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1
//     }
//     res.send(`You sent a request ${req.session.count} times`)
// });

// app.get("/test", (req, res) => {
//     res.send("test successful")
// });

app.use("/users", users)
app.use("/posts", posts)

app.listen("3000", (req, res) => {
    console.log("app is listening on port 3000");
});