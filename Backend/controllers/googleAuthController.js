const User = require("../models/userModel");
const { errorHandler } = require("../utils/error.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const googleAuth = async (req, res, next) => {
  try {
    const { name, email, googlePhotoUrl } = req.body;
    let user = await User.findOne({ email }); // Checking the user in database
    if (!user) {
      const generatePassword = Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generatePassword, 10); // Hashing password for security reasons
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        // Generate token and send it to client
        { _id: newUser._id },
        process.env.JWT_SECRETKEY
        //   { expiresIn: "1h" }
      );
      const { password: pass, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const token = jwt.sign(
        // Generate token and send it to client
        { _id: user._id },
        process.env.JWT_SECRETKEY
        //   { expiresIn: "1h" }
      );
      const { password: pass, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = googleAuth;
