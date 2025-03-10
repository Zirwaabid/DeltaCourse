//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

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

// require models 
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

let mongo_url = "mongodb://127.0.0.1:27017/wonderlust";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

// server site validation 
const validatListing = (req, body, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
};
const validateReview = (req, body, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
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
app.post("/listings", validatListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

// show route 
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
}));

// create path to create form for update 
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//create path to get or update form data
app.put("/listings/:id", validatListing, wrapAsync(async (req, res) => {
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

// review 
// post route to add new review to that listing whose id 
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`)
}));

// delete route for reviews 
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`)
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
