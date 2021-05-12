const express = require ("express");
const router = express.Router();
const path = require("path")


router.get("/register", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "../views/register.html"))
});



module.exports = router;