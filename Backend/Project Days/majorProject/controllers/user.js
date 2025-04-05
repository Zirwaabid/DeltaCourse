const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("Users/signup.ejs")
}

module.exports.signup = async (req, res) => {
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

}

module.exports.renderLoginPage=(req, res) => {
    res.render("Users/login.ejs")
}

module.exports.login= async (req, res) => {
    req.flash("success", "Welcome back to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout=(req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "you logged out");
        res.redirect("/listings")

    });

}