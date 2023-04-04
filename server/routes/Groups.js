const router = require("express").Router();
const { createGroup, joinGroup, getGroups } = require("../controllers/groupController");
const {protect} = require("../middlewares/authMiddleware");

//create group
router.route("/create").post(createGroup);

//join group
router.route("/:groupId/join").post(joinGroup);

//get groups
router.route("/").get(getGroups);

module.exports = router;