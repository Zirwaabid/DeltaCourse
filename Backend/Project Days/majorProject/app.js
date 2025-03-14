//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// require routes 
const listings = require("./routes/listing.js")
const reviews = require("./routes/review.js")

// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")

//for require views,public folder in every file use following code
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

//require and setting for methodoverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

// require and setting for ejs mate 
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate)

// require and setting for mongoose 
const mongoose = require("mongoose");

let mongo_url = "mongodb://127.0.0.1:27017/wonderlust";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

app.get("/", (req, res) => {
    res.send("root is working");
});

// require routes 
app.use("/listings", listings)
app.use("/listings/:id/reviews", reviews)

// error handler 
app.all("*", (req, res, next) => {
    next(new expressError(404, "page not found!"));
})

// error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs", { message })
});

app.listen("8080", () => {
    console.log("server is listening on port 8080");
});
