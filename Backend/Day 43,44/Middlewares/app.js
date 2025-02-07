const express = require("express");
const app = express();

// create random middleware
// app.use((req, res, next) => {
//     console.log("hi i am a middleware");
//     next();
// });

// create our logger like morgan(npm package)
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString(); // create our own parameter
//     console.log(req.method, req.path, req.hostname, req.time);
//     next();
// });

// activity 
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "accesstoken") {
        next()
    };
    res.send("ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});


// error handling middlewares
app.get("/err",(req,res)=>{
    abcd=abcd;
})
app.use((err,req,res,next)=>{
    console.log("-----error----");
    next(err);
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