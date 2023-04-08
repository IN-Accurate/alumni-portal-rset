const jwt = require('jsonwebtoken');
const userModel = require('../models/users');
const Users = require('../models/users');

const protect = async (req, res, next) => {
  let token;

  if (
    req.header.authorization &&
    req.header.authorization.startsWtih('Bearer')
  ) {
    try {
      //Get token from header: bearer token
      token = req.headers.authorization.split(' ')[1];
      console.log(token);
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from token
      req.user = await userModel.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      res.status(401).json('Not authorized');
    }
  }

  if (!token) {
    res.status(401).json('No token. Not authorized');
  }
};

module.exports = { protect };
