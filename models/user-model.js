const mongoose = require("mongoose");
require("dotenv").config();
const jwt =require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: {
    type:String ,
    reqired:true,
    trim:true
},
    email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email address"]
},
    password: {
    type:String ,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
},
},{timestamps:true});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {userId: this._id},
    process.env.JWT_SECRET_KEY
  );
};


module.exports=userSchema.model("User",userSchema);