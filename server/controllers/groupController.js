const groupModel = require("../models/group");
const userModel = require("../models/users");

const createGroup = async(req,res,next) => {
    try{
        const {name,description,userid} = req.body;
        const user = await userModel.findById(userid);
        if(!user) {
            res.status(401).json({error: true, message: "user not found"});
        }

        const group = new groupModel({
            name,
            description,
            members: [userid],
            size: 1
        });

        await group.save();
        res.status(201).json(group);
    }
    catch(err) {
        res.status(401).json({error: true, message:err.message});
    }
}

module.exports = {createGroup}