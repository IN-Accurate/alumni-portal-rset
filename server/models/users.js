const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Please enter your name"],
        min: 3,
        max: 20
    },
    uid: {
        type: String,
        require: [true,"Please enter your UID"],
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
        require: [true,"Please enter your number"],
        max: 10,
        validate: validator.isMobilePhone
    },
    year: {
        type: String,
        require: [true,"Please enter year of graduation"],
    },
    email: {
        type: String,
        require: [true,"Please enter your email"],
        unique: true,
        validate: validator.isEmail
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


