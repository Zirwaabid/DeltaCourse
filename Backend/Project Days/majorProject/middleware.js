module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // redirect url info save 
        req.session.redirectUrl=req.originalUrl;
        req.flash("error", "you must be logged in to create listing");
       return res.redirect("/login")
    }
    next();
}

module.exports.saveUrl=(req,res,next)=>{
    if (req.session.redirectUrl) {
        res.locals.redirectUrl=req.session.redirectUrl
    }
    next()
}