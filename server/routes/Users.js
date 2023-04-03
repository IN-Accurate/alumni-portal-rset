const router = require("express").Router();
const { updateUsers, deleteUsers, getUser } = require("../controllers/userController");
const {protect} = require("../middlewares/authMiddleware");

//update
router.route("/:id").put(updateUsers)

//delete 
router.route("/:id").delete(deleteUsers);

//get a user
router.route("/:id").get(protect,getUser);

module.exports = router;