const User = require("../models/user-model");

const checkUserExists = (req,res,next)=>{
    const {email}= req.body;
    existedUser = User.find(email);
    if (existedUser) {
        return res.status(404).json({message : "User Already Have Account" , status : 404})
    } 
    next();
}
module.exports = checkUserExists;