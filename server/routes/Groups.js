const router = require("express").Router();
const { createGroup, joinGroup } = require("../controllers/groupController");
const {protect} = require("../middlewares/authMiddleware");

//create group
router.route("/create").post(createGroup);

module.exports = router;