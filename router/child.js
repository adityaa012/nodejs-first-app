const express =  require("express");
const router = express.Router();
const isauthenticated = require("../authorization/auth.js");
const { newchild , seechilddetail, childfind, updatechild } = require("../controller/child.js") 

 router.post("/new", isauthenticated,newchild);
 router.get("/me", isauthenticated, seechilddetail);
 router.get("/mychild", isauthenticated, childfind);
 router.put("/:id", isauthenticated, updatechild);





module.exports = router; 