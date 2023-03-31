const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 30
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


