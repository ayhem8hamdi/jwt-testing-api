const asyncHandler = require("express-async-handler");
const User = require("../models/user-model");
const {  comparePasswords} = require("../helper/password_hashing");



const emailAndPAsswordVerification = asyncHandler(async (req,res,next)=>{
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({status:400,message:"email and password are both required"});    
    }
    const wantedUser= await User.findOne({email:req.body.email});
    if (!wantedUser) {
        return  res.status(400).json({status:404,message:"Email Or Password Are Incorrect"});
    }
    const isPasswordCorrect=await comparePasswords(req.body.password,wantedUser.password);
    if (!isPasswordCorrect) {
          return  res.status(400).json({status:404,message:"Email Or Password Are Incorrect"}); 
    }
    req.body.wantedUser = wantedUser;
    next();

});


module.exports= {emailAndPAsswordVerification}