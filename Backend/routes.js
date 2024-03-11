const express = require("express");
const signup = require("./controllers/signupController.js");
const router = express.Router();

router.post("/signup", signup);

module.exports = router;
