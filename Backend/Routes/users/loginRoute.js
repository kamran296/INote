const express = require("express");
const loginController = require("./../../controller/loginController");

const router = express.Router();

router.route("/").post(loginController.loginUser);
module.exports = router;
