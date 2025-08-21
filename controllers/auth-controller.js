const asyncHandler= require("express-async-handler");

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