const express = require("express");
const router = express.Router();

// error handling object 
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validatListing } = require("../middleware.js");

// require routes callbacks from controllers
const listingController = require("../controllers/listing.js");

// listing routes 

// index route and create route to get and add form data 
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, validatListing, wrapAsync(listingController.createListing))

//create route for form 
router.get("/new", isLoggedIn, listingController.renderNewForm);

// show route ,create path to get or update form data,delete path
router.route("/:id")
    .get(wrapAsync(listingController.showRoute))
    .put(isLoggedIn, isOwner, wrapAsync(listingController.updateRoute))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyRoute));

// create path to create form for update 
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderUpdateForm));

module.exports = router