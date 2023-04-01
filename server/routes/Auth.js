const router = require("express").Router();
const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const authModel = require("../models/auth");
const { userLogin, userRegister } = require("../controllers/authController");

//register
router.route("/register").post(userRegister);
  
//login
router.route("/login").post(userLogin);

module.exports = router;
