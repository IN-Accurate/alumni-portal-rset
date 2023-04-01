const router = require("express").Router();
const { userLogin, userRegister } = require("../controllers/authController");

//register
router.route("/register").post(userRegister);
  
//login
router.route("/login").post(userLogin);

module.exports = router;
