//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// require routes 
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter=require("./routes/user.js");

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

let mongo_url = "mongodb://127.0.0.1:27017/wonderlust";
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

// require passport or localPassport
const passport = require("passport");
const LocalStrategy = require("passport-local");

// require userModel
const User = require("./models/user.js");

app.get("/", (req, res) => {
    res.send("root is working");
});

// require and setting for express-session 
const session = require("express-session");
const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
    Cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    },
}
app.use(session(sessionOptions))

// require and setting for connect-flash 
const flash = require("express-flash");
app.use(flash())

// middleware for flash to display messages
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error")
    next()
});

// implementation of passport for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// use routes 
// app.get("/demouser",async(req,res)=>{
//     const fakeUser=new User({
//         email:"student@gmail.com",
//         username:"Doray"
//     });
//    const registerUser=await User.register(fakeUser,("helloworld"));
//    res.send(registerUser);
// })
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter); 

// error handler 
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
