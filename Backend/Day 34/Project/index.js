const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log("app is listening on port");
})

let posts = [
    {
        username: "Zirwa Abid",
        content: "I am an inspiring Web Developer"
    },
    {
        username: "Anas Rafiq",
        content: "Hardwork is very important for success"
    },
    {
        username: "Alkaram",
        content: "Winter sale is live now so hurry up and fill your carts"
    }
]

// to get data for all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
});

//to create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content })
    res.redirect("/posts")
})