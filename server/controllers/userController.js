const updateUsers = async (req,res,next) => {
    if(req.body.uid === req.params.uid || req.body.isAdmin) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    catch(error) {
      return res.status(500).json(error);
    }

    try {
      const user = await userModel.findByIdAndUpdate(req.params.id,{ $set: req.body });
      res.status(200).json("Account updated");
    }
    catch(err) {
      return res.json(err);
    }
  }
  else {
    return res.status(403).json("you can delete only your account");
  }
}

const deleteUsers = async(req,res,next) => {
  if(req.body.uid === req.params.uid || req.body.isAdmin) {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    }
    catch(error) {
      return res.status(500).json(error);
    }
  }
  else {
    return res.status(403).json("you can delete only your account");
  }
}

const getUsers = async(req,res,next) => {
  try{
    const user =  await userModel.findById(req.params.id);
    res.status(200).json(user);
  }
  catch(err) {
    return res.status(500).json(err);
  }
}

module.exports = {getUsers, deleteUsers, updateUsers}

