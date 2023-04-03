const router = require("express").Router();
const postModel = require("../models/posts");
const cloudinary = require("../utils/cloudinary");

const {protect} = require("../middlewares/authMiddleware");

//newpost
router.post("/newpost",async (req,res) => {
  const {username, title, text, image} = req.body;
  try{
    const result = await cloudinary.uploader.upload(image, {
      folder: "posts",
      //width: 300
      //crop: "scale"
    });

    const post = await postModel.create({
      username,
      title,
      text,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      }
    });
    
    res.status(201).json({success: true, post});
  }
  catch(err){
    return res.status(500).json(err);
  }
})
  
module.exports = router;
