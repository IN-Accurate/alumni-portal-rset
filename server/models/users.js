const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20
    
    },
    uid: {
        type: String,
        require: true,
        unique:true,
        min: 8,
        max: 8
    },
    branch: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        max: 10
    },
    year: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },    
},
{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;


