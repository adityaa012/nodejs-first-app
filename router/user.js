const express =  require("express");
const router = express.Router();
const { register, login } = require("../controller/user.js");
const isauthenticated = require("../authorization/auth.js");
const { logout } = require("../controller/user.js")

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isauthenticated, logout)

module.exports = router