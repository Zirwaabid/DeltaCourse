const express = require("express");
const router = express.Router({ mergeParams: true });

// error handling object 
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// review 
// post route to add new review to that listing whose id 
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// delete route for reviews 
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
