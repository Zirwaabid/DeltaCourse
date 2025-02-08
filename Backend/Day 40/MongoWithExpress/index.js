//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const expressError = require("./ExpressError.js")

//require and setting for methodoverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs");
// require views or public outside
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

// require and setting for mongoose 
const mongoose = require('mongoose');
// require model
const chat = require("./models/chat.js");
const { error } = require("console");
// create connection bt js and mongodatabase
main().then(
    console.log("connection successful")
)
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// create paths 

app.get("/", (req, res) => {
    res.send("root directory is working");
});

//index route
app.get("/chats", async (req, res, next) => {
    try {
        let chats = await chat.find();
        res.render("index.ejs", { chats });
    }
    catch (err) {
        next(err)
    }
})

//new route
app.get("/chats/new", (req, res) => {
    // throw new expressError(404, "page not found")
    res.render("new.ejs")
});

app.post("/chats", async (req, res, next) => {
    try {
        let { from, msg, to } = req.body;
        let newChat = new chat({
            from: from,
            msg: msg,
            to: to,
            created_at: new Date(),
        });
        await newChat.save()
        res.redirect("/chats");
    }
    catch (err) {
        next(err);
    }
});

// show route middlewares error handling 
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let chatData = await chat.findById(id);
        if (!chatData) {
            next(new expressError(500, "chat not found"));
        }
        res.render("edit.ejs", { chatData });
    }
    catch (err) {
        next(err);
    };
});

// edit route 
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chatData = await chat.findById(id);
        res.render("edit.ejs", { chatData });
    }
    catch (err) {
        next(err);
    }
});

// update route 
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
        res.redirect("/chats");
    }
    catch (err) {
        next(err);
    }
})

//destroy route
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedChat = await chat.findByIdAndDelete(id)
        res.redirect("/chats");
    }
    catch (err) {
        next(err);
    }
});

// error handling
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occurred" } = err;
    res.status(status).send(message);
});

app.listen("8080", () => {
    console.log("app is listening on port 8080")
});