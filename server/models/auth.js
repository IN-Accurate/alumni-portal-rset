const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    uid: {
        type: String,
        require: true,
        min: 8,
        max: 8
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 30,
        select: false
    },    
},
{ timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;


