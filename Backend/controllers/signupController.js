const userModel = require("../models/userModel.js");
const bcryptjs = require("bcryptjs"); //here we bcryptjs instead of bcrypt because it's gives problem's during deployment
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).json({ message: "All fields are required" });
    } else {
      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
        res.status(409).send("Email already in use");
      } else {
        // hash the password before saving to database
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = new userModel({
          username,
          email,
          password: hashPassword,
        });
        await newUser.save();
        res.status(200).send({ message: "Signed up successfully" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = signup;
