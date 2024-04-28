const jwt = require("jsonwebtoken");
const userdetail = require("../model/userdetails.js")


const isauthenticated = async (req,res, next) => {
     const { token } = req.cookies;

     if(!token){
        return res.status(500).json({
            success:false,
            message:"login first"
        })
     }

    const decoded =  jwt.verify(token, "hdicihfjiddcnjdidjeijfd");

    //console.log(decoded)

    req.user = await userdetail.findById(decoded._id);
    next()
}

module.exports = isauthenticated;
