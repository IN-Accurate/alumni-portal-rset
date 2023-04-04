const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    members: {
        type: Array,
        default: []
    },
    Admin: {
        type: Array,
        default: []
    },
    size: {
        type: Number,
        default: 0
    },
},
{timestamps: true}
);

const Groups = mongoose.model("Groups", groupSchema);
module.exports = Groups;