const postModel = require("../models/posts");
const cloudinary = require("../utils/cloudinary");
const userModel = require("../models/users");

const newPost = async(req, res, next) => {
  const { userId, title, text, image } = req.body;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      console.log("bruhd");
      return res.status(401).json({ error: true, message: "user not found" });
    }
    
    const result = await cloudinary.uploader.upload(image, {
      folder: "posts"
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
    
    return res.status(201).json({ success: true, post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to create post" });
  }
};

module.exports = { newPost };
