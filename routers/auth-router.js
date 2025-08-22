const express = require("express");
const router= express.Router();
const { login,register}= require("../controllers/auth-controller");
const checkUserExists = require("../middlewares/user-existance-check-middleware");
const {emailAndPAsswordVerification} = require("../middlewares/email-password-verification");

router.route("/register").post(checkUserExists,register);
router.route("/login").post(emailAndPAsswordVerification,login);

module.exports= router;