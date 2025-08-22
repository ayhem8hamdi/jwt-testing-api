const asyncHandler= require("express-async-handler");
const User = require("../models/user-model");
const {hashPassword , comparePasswords} = require("../Helper/password_hashing");



// since it's only for testing purposes then we won't validate data with joi 

const register = asyncHandler(
  async  (req,res,next)=>{
      req.body.password=await  hashPassword(req.body.password); 
      const newUser=await User.create(req.body);
    if (!newUser) {
return res.status(500).json({
  status: 500,
  message: "User could not be created. Please try again later."
});
    }
    const jwt=newUser.generateToken();
  const { password, ...others } = newUser.toObject();
    res.status(201).json({...others , token:jwt});
    }
);





const login = asyncHandler(
  async  (req,res,next)=>{
   const {wantedUser}= req.body;
    const jwt=wantedUser.generateToken();
   const { password, ...others } = wantedUser.toObject();
    res.status(200).json({...others , token:jwt});
    }  
);






module.exports={login,register}