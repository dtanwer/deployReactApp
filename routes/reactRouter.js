const express = require('express');
const router = express.Router();
const path = require('path');
router.get("*", (req, res) => {
    // console.log("path",path.resolve(__dirname,"..", 'my-base-pathcheck', 'build', 'index.html'));
    res.send("Api is running")
    // res.sendFile(path.resolve(__dirname,"..", 'my-base-pathcheck', 'build', 'index.html'));
})

module.exports = router;

