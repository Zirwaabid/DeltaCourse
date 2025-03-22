const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("users home page")
});
router.get("/:id", (req, res) => {
    res.send("users show page")
})

module.exports = router