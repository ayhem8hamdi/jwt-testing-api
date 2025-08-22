const asyncHandler = require("express-async-handler");

const privateLuckyNumberFeature= asyncHandler((req,res,next)=>{

    const luckyNumber=Math.floor(Math.random() * 100);
    res.status(200).send(`Congratulation ur lucky number is ${luckyNumber}`);
});


module.exports={privateLuckyNumberFeature};