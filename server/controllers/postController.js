const postModel = require("../models/posts");
const cloudinary = require("../utils/cloudinary");
const userModel = require("../models/users");

const newPost = async(req,res,next) => {
  const {userid, title, text, image} = req.body;
  try{

    const user = userModel.findById(userid);
    if(!user) {
      res.status(401).json({error: true, message: "user not found"});
    }
    
    const result = await cloudinary.uploader.upload(image, {
      folder: "posts",
      //width: 300
      //crop: "scale"
    }, (err,result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to upload file' });
      }
    });

    console.log("sus");
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