const express = require("express");
const router= express.Router();
const { login,register}= require("../controllers/auth-controller");
const checkUserExists = require("../middlewares/user-existance-check-middleware");

router.route("/register").post(checkUserExists,register);
router.route("/login").post(login);

module.exports= router;