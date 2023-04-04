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

const joinGroup = async(req,res,next) => {
    try{
        const memberId = req.body.memberId;
        const group = groupModel.findById(req.params.groupId);

        if(!group) {
            return res.status(404).json({ error: false, message: 'Group not found' });
        }
        group.members.push(memberId);
        await group.save();
        res.status(200).json(group);
    }
    catch(err) {
        res.status(401).json({error: true, message:err.message});
    }
}

const postToGroup = async(req,res,next) => {
    try{

    }
    catch(err) {
        res.status(401).json({error: true, message:err.message});
    }
}

module.exports = {createGroup, joinGroup}