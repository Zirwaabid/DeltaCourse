//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/ExpressError.js");

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
const Listing = require("./models/listing.js");

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

// index route 
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//create route for form 
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// create route to get and add form data 
app.post("/listings", wrapAsync(async (req, res, next) => {
    if (!req.body.listing) {
        throw new expressError(400, "Send valid data for listing")
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save()
    res.redirect("/listings");
}));

// show route 
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// create path to create form for update 
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//create path to get or update form data
app.put("/listings/:id", wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new expressError(400, "Send valid data for listing")
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//delete path
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

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
