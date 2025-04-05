const Listing = require("./models/listing");
const Review = require("./models/review.js");
const expressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // redirect url info save 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create listing");
        return res.redirect("/login")
    }
    next();
}

module.exports.saveUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next()
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next()
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this Review");
        return res.redirect(`/listings/${id}`);
    }
    next()
}

// // server site validation
module.exports. validatListing = (req, body, next) => {
    let { error } = listingSchema.validate(req.body);
    console.log(error)
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
};

module.exports.validateReview = (req, body, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsq = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsq);
    } else {
        next();
    }
};
