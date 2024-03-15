const express = require("express");
const signup = require("./controllers/signupController.js");
const signin = require("./controllers/signinController.js");
const googleAuth = require("./controllers/googleAuthController.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", googleAuth);
module.exports = router;
