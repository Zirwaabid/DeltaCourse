const express = require("express");
const app = express();
let expressErr = require("./expressError");

// create random middleware
app.use((req, res, next) => {
    console.log("hi i am a middleware");
    next();
});

// create our logger like morgan(npm package)
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString(); // create our own parameter
    console.log(req.method, req.path, req.hostname, req.time);
    next();
});

// activity 
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "accesstoken") {
        next()
    };
    throw new expressErr(401, "ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});


// error handling middlewares
app.get("/err", (req, res) => {
    abcd = abcd;
});

// activity 
app.get("/admin", (req, res) => {
    throw new expressErr(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
    let { status = 500, message = "some error occurred" } = err;
    res.status(status).send(message);
});


// ---------------- 
app.get("/", (req, res) => {
    res.send("Hi i am a root");
});
app.get("/random", (req, res) => {
    res.send("Hi i am random");
})

app.listen("8080", () => {
    console.log("app is listening on port 8080");
})