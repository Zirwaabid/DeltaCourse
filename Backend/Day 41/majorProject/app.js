//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

//require and setting for methodoverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

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
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings })
});

//create route for form 
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});
// create route to get and add form data 
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save()
    res.redirect("/listings");
})

// show route 
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// create path to create form for update 
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//create path to get or update form data
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});

//delete path
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

app.listen("8080", () => {
    console.log("server is listening on port 8080");
});
