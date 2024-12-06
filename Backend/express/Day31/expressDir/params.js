const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
});

//response of parameters req
app.get("/ig/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlstr = `<h1>Hi Welcome to @${username} page</h1>`
    res.send(htmlstr);
    // res.send(`This account belongs to @${username} and your id is ${id}`)
})

//response of queries req
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("Nothing Searched")
    }
    res.send(`<h1>These are the results of @${q} </h1>`)
})