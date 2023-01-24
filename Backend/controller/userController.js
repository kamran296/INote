const User = require("./../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kamrankhot";

module.exports.createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  console.log(secPass);

  const data = {
    user: {
      id: User.id,
    },
  };
  const authToken = jwt.sign(data, JWT_SECRET);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ email: "email is already in used" });
    }

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    newUser.save();

    res.status(200).json({
      status: "success",
      data: {
        authToken,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error in user data",
      message: err,
    });
  }
};
