const express = require("express");
const app = express();
const path = require("path");
var methodOverride = require('method-override')
let port = 8080;

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))

const { v4: uuidv4 } = require("uuid")

app.listen(port, () => {
    console.log("app is listening on port");
})

let posts = [
    {
        id: uuidv4(),
        username: "Zirwa Abid",
        content: "I am an inspiring Web Developer"
    },
    {
        id: uuidv4(),
        username: "Anas Rafiq",
        content: "Hardwork is very important for success"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({ username, content, id })
    res.redirect("/posts")
})

// to get single post on the basis of id
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", { post })
})

// to update/edit post
app.patch("/posts/:id", (req, res) => {
    let newContent = req.body.content;
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    post.content = newContent
    res.redirect("/posts")
});

// create form for update
app.get("/posts/:id/:edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs", { post });
})

// delete post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id)
    res.redirect("/posts")
})