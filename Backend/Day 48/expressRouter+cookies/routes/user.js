const express = require("express");
const router = express.Router();

// index page 
router.get("/", (req, res) => {
    res.send("welcome to home page")
});

router.get("/:id", (req, res) => {
    res.send("post it")
})

module.exports = router;