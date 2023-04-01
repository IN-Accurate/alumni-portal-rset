const router = require("express").Router();
const { updateUsers, deleteUsers, getUsers } = require("../controllers/userController");

//update
router.route("/:id").put(updateUsers)

//delete 
router.route("/:id").delete(deleteUsers);

//get a user
router.route("/:id").get(getUsers);

module.exports = router;