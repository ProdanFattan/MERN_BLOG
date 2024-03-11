const userModel = require("../models/userModel.js");
const signup = async (req, res) => {
  console.log(req.body);
  console.log(req.data);
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
    const newUser = new userModel({
      username,
      email,
      password,
    });
    await newUser.save();
    res.status(200).send({ message: "Signed up successfully" });
  }
};

module.exports = signup;
