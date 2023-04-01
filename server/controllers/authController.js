const userRegister = async (req,res,next) => {
    try {
        const {name,uid,branch,phone,year,email,isadmin,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new userModel({
          name,
          uid,
          branch,
          phone,
          year,
          email,
          isadmin
        });
        const User = await newUser.save();
  
        const newAuth = new authModel({
          uid,
          password:hashedPassword
        });
        const Auth = await newAuth.save();
  
        res.status(200).json({user: User, auth: Auth});
      } catch (error) {
        console.log(error);
      }
}

const userLogin = async (req, res, next) => {
    try {
      let user = await authModel.findOne({ uid: req.body.uid });
      let flag = -1;
      
      if (!user) {
        flag = 1;
        user = { name: "User not found" };
        res.status(200).json(user);
      }
      if (flag == -1) {
        let validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPassword) {
          user = { name: "Wrong password" };
          res.status(200).json(user);
          flag = 0;
        }
      }
      if (flag == -1) res.status(200).json(user);
    } catch (err) {
      res.status(200).json("user doesn't exist");
    }
}

module.exports = {userRegister,userLogin};