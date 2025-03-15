const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

// error handling object 
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/ExpressError.js");
const {reviewSchema } = require("../schema.js");

// server site validation 
const validateReview = (req, body, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
};

// review 
// post route to add new review to that listing whose id 
router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}));

// delete route for reviews 
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

module.exports = router;
