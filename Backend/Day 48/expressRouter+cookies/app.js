const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
//cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

app.get("/", (req, res) => {
    res.send("root page")
    console.dir(req.cookies) //we can access cookies throug cookie parser
});

// express router 
app.use("/user", users)
app.use("/post", posts)

//how to send cookies
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "AslamuAlikum")
    res.cookie("MadeIn", "Pakistan")
    res.send("We sent you some cookies!")
});

// access cookies 
app.get("/greet", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`Hi ${name}`);
})

//how to send signed cookies
app.get("/getsignedcookies", (req, res) => {
    res.cookie("Made-In", "Pakistan", { signed: true });
    res.send("Sent Signed Cookies")
})

//how to verify it is signed cookie or someone change it
app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verified")
})

app.listen("3000", () => {
    console.log("app is listening on port 3000")
});

