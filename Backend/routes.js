const express = require("express");
const signup = require("./controllers/signupController.js");
const signin = require("./controllers/signinController.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
module.exports = router;
