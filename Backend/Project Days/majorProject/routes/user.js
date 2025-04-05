const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

//signup
router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

//login
router.get("/login", userController.renderLoginPage);

router.post("/login", saveUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true, }),
    userController.login);

// logout
router.get("/logout", userController.logout)

module.exports = router;