const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");

// error handling object 
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");

// // server site validation 
const validatListing = (req, body, next) => {
    let { error } = listingSchema.validate(req.body);
    console.log(error)
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
};
// listing routes 

// index route 
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//create route for form 
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

// create route to get and add form data 
router.post("/", validatListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!"); //msg
    res.redirect("/listings");
}));

// show route 
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));

// create path to create form for update 
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}));

//create path to get or update form data
router.put("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!"); //msg
    res.redirect(`/listings/${id}`);
}));

//delete path
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!"); //msg
    res.redirect("/listings");
}));

module.exports = router