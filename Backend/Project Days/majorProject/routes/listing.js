const express = require("express");
const router = express.Router();

// error handling object 
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validatListing } = require("../middleware.js");

// require routes callbacks from controllers
const listingController = require("../controllers/listing.js");

// listing routes 

// index route 
router.get("/", wrapAsync(listingController.index));

//create route for form 
router.get("/new", isLoggedIn, listingController.renderNewForm);

// create route to get and add form data 
router.post("/", isLoggedIn, validatListing, wrapAsync(listingController.createListing));

// show route 
router.get("/:id", wrapAsync(listingController.showRoute));

// create path to create form for update 
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderUpdateForm));

//create path to get or update form data
router.put("/:id", isLoggedIn, isOwner, wrapAsync(listingController.updateRoute));

//delete path
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyRoute));

module.exports = router