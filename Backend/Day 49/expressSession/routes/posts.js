const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("home page for posts")
});
router.get("/:id",(req,res)=>{
    res.send("show page for posts")
})

module.exports=router