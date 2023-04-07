const router = require("express").Router();
const {protect} = require("../middlewares/authMiddleware");
const { newPost } = require("../controllers/postController");

//newpost
router.route("/newpost").post(newPost);
  
module.exports = router;
