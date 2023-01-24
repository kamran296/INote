// DAta is fetch using the auth token by posting the auth token we can get the data of user from data base
// const loginData = require("./../middleware/loginData");

const loginController = require("./../../controller/loginController");
const express = require("express");

const logindata = require("./../../middleware/loginData");

const router = express.Router();
router.route("/").post(logindata, loginController.logindata);
module.exports = router;
