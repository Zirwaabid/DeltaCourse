const express = require("express");
const router = express.Router();

// index page 
router.get("/", (req, res) => {
    res.send("welcome to post page")
});

router.get("/:id", (req, res) => {
    res.send("saw post")
})

module.exports = router;