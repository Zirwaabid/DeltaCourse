const express = require("express");
let app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
});

app.use((req, res) => {
    console.log("request received")
})