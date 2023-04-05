const postModel = require("../models/posts");
const cloudinary = require("../utils/cloudinary");

const newPost = async(req,res,next) => {
  const {userid, title, text, image} = req.body;
  try{
    const result = await cloudinary.uploader.upload(image, {
      folder: "posts",
      //width: 300
      //crop: "scale"
    });

    const post = await postModel.create({
      userid,
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
} 

module.exports = {newPost}