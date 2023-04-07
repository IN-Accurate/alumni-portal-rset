const router = require("express").Router();
const { updateUsers, deleteUsers, getUser, userGroups } = require("../controllers/userController");
const {protect} = require("../middlewares/authMiddleware");

//update
router.route("/:id").put(updateUsers)

//delete 
router.route("/:id").delete(deleteUsers);

//get a user
router.route("/:id").get(getUser);

//get user groups
router.route("/groups/:id").get(userGroups);

module.exports = router;