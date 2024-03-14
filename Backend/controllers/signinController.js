const User = require("../models/userModel");
const { errorHandler } = require("../utils/error.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
      next(errorHandler(400, "All fields are required"));
    } else {
      try {
        let user = await User.findOne({ email }); // Checking the user in database
        if (!user) {
          next(errorHandler(404, "Wrong Data 345"));
        } else {
          const isMatched = bcryptjs.compareSync(password, user.password);
          if (!isMatched) {
            next(errorHandler(400, "Wrong Data 346"));
          } else {
            const token = jwt.sign(
              // Generate token and send it to client
              { _id: user._id },
              process.env.JWT_SECRETKEY
              //   { expiresIn: "1h" }
            );
            console.log(token);
            const { password: pass, ...rest } = user._doc;
            res
              .status(200)
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .json(rest);
          }
        }
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signin;
