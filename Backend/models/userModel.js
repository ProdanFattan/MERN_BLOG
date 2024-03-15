const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uljsEybwjvJZT1Ou7dm9kEyBwS5GmO-Wog&usqp=CAU",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
