const router = require("express").Router();
const { updateUsers, deleteUsers, getUsers } = require("../controllers/userController");
const userModel = require("../models/users");
const bcrypt = require("bcrypt");

//update
router.route("/:id").put(updateUsers)

//delete 
router.route("/:id").delete(deleteUsers);

//get a user
router.route("/:id").get(getUsers);

module.exports = router;