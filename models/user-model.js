const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
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

module.exports=userschema.model("User",userschema);