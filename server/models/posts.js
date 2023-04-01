const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    title: {
        type: String,
        require: true,
        max: 50,
    },
    text: {
        type: String,
        require: true,
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
},
{ timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;


