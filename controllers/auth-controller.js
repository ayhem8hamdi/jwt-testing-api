const asyncHandler= require("express-async-handler");
const User = require("../models/user-model");
const {hashPassword , comparePasswords} = require("../Helper/password_hashing");



// since it's only for testing purposes then we won't validate data with joi 

const register = asyncHandler(
  async  (req,res,next)=>{
        req.body.password=await  hashPassword(req.body.password); 
      const newUser=await User.create(req.body);
    if (!newUser) {
        return res.status(404).json({status:404,message:"There Was A Problem Try Again Later"});
    }

      
    }
);





const login = asyncHandler(
    (req,res,next)=>{
        res.send("login fake");
    }
);

module.exports={login,register}