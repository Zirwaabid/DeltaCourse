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

// create asyncWrap function to handle all the errors
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// create paths 

app.get("/", (req, res) => {
    res.send("root directory is working");
});

//index route
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await chat.find();
    res.render("index.ejs", { chats });
}));

//new route
app.get("/chats/new", (req, res) => {
    // throw new expressError(404, "page not found")
    res.render("new.ejs")
});

app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from, msg, to } = req.body;
    let newChat = new chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    await newChat.save()
}));

// show route middlewares error handling 
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chatData = await chat.findById(id);
    if (!chatData) {
        next(new expressError(500, "chat not found"));
    }
    res.render("edit.ejs", { chatData });
}));

// edit route 
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chatData = await chat.findById(id);
    res.render("edit.ejs", { chatData });
}));

// update route 
app.put("/chats/:id", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    res.redirect("/chats");
}));

//destroy route
app.delete("/chats/:id", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await chat.findByIdAndDelete(id)
    res.redirect("/chats");
}));

// error handling
const handleValidErr = (err) => {
    console.log("This was a validation error please follow the rules");
    console.dir(err.message);
    return err;
}
app.use((err,req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
      err=  handleValidErr(err);
    }
    next(err);
});
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occurred" } = err;
    res.status(status).send(message);
});

app.listen("8080", () => {
    console.log("app is listening on port 8080")
});