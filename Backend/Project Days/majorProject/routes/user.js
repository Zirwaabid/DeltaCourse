const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");

//signup
router.get("/signup", (req, res) => {
    res.render("Users/signup.ejs")
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => { //login with signup
            if (err) {
                return next(err)
            }
            req.flash("success", "Welcome to Wanderlust!")
            res.redirect("/listings")
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}));

//login
router.get("/login", (req, res) => {
    res.render("Users/login.ejs")
});

router.post("/login", saveUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true, }),
    async (req, res) => {
        req.flash("success", "Welcome back to WanderLust!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    });

// logout
router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "you logged out");
        res.redirect("/listings")

    });

})

module.exports = router;