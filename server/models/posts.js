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
    img: {
        type: String,
        default: "",
        require: true
    },
},
{ timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);
module.exports = Products;


