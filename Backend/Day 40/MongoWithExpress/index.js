//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))

//require and setting for methodoverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

// require and setting for mongoose 
const mongoose = require('mongoose');
// require model
const chat = require("./models/chat.js");
// create connection bt js and mongodatabase
main().then(
    console.log("connection successful")
)
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// create paths 

app.get("/", (req, res) => {
    res.send("root directory is working");
});

//index route
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    res.render("index.ejs", { chats });
})

//new route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let newChat = new chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    newChat.save()
        .then((res) => {
            console.log("your chat is save");
        }).catch((err) => {
            console.log(err);
        })
    res.redirect("/chats");
});

// edit route 
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chatData = await chat.findById(id);
    res.render("edit.ejs", { chatData });
});

// update route 
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    res.redirect("/chats");
})

//destroy route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await chat.findByIdAndDelete(id)
    res.redirect("/chats");
})

app.listen("8080", () => {
    console.log("app is listening on port 8080")
});