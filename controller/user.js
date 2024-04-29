const express = require("express");
// const users = require("./model/users.js");
const userdetail = require("../model/userdetails.js");
const bcrypt = require("bcrypt");
const sendcookie =  require("../utils/feature.js")


const register = async (req, res) => {

    const { name, gender, relation, city, email , password } = req.body;

    const user = await userdetail.findOne({email});
    
    if(user){
        res.json({
            success: false,
            message: "user already registered"
        })
    }

    const hashedpassword = await bcrypt.hash(password,10)

    await userdetail.create({
        name,
        gender,
        relation,
        city,
        email,
        password:hashedpassword

    })

    res.status(200).json({
        success: true,
        message:"registered succesfully"
    })
}

const login = async(req, res) => {
    const {email, password} = req.body;

    const user = await userdetail.findOne({email});
    
    if(!user){
        res.json({
            success:false,
            message:"register first"
        })
    }

   const checkpassword =  await bcrypt.compare(password,user.password)
   const checkemail =  await email == userdetail.email
   
   if(!checkpassword && !checkemail){
       res.json({
        success: false,
        message: "password or email is invalid"
       })
   }

   sendcookie(user,res,"successfully login");

}


const logout = (req,res) => {

    res.status(200).cookie( "token", "",{
        expires:new Date(Date.now()),
        secure: process.env.NODE_ENV == "Development"? "lax": "none",
        samesite: process.env.NODE_ENV == "Development"? false : true,
    }).json({
        success: true,
        message: "logout successfully"
    })
}

module.exports = {
    register,
    login,
    logout,
}