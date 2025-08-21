const asyncHandler= require("express-async-handler");
const User = require("../models/user-model");


// since it's only for testing purposes then we won't validate data with joi 
const login = asyncHandler(
    (req,res,next)=>{
        res.send("login fake");
    }
);


const register = asyncHandler(
    (req,res,next)=>{
        res.send("sign up fake");
    }
);


module.exports={login,register}