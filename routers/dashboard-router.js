const express = require("express");
const router= express.Router();
const{privateLuckyNumberFeature}=require("../controllers/dashboard-controller");
const {verifyTokenValidity, isAuthorized}=require("../middlewares/verify-token");

 
router.route("/:id").post(verifyTokenValidity,isAuthorized,privateLuckyNumberFeature);


module.exports= router;