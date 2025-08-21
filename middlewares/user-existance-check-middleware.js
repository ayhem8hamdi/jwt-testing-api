const User = require("../models/user-model");
const asyncHandler= require("express-async-handler");

const checkUserExists = asyncHandler(async(req,res,next)=>{
    const {email}= req.body;
    existedUser =await User.findOne({email:email});
    if (existedUser) {
      return res.status(409).json({
        message: "User already has an account",
        status: 409
      });
    }

    next();
})
module.exports = checkUserExists;