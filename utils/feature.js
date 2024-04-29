const jwt = require("jsonwebtoken");

const sendcookie = (userss, res, message) => {
    const token =  jwt.sign({_id:userss._id},"hdicihfjiddcnjdidjeijfd");

    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV == "Development")
     
    res.status(200).cookie("token", token,{
        httpOnly:true,
        maxAge: 15 * 60 * 1000,
        secure: process.env.NODE_ENV == "Development"? "lax": "none",
        samesite: process.env.NODE_ENV == "Development"? false : true,
    })
    .json({
        success:true,
        message
    })
}


module.exports = sendcookie;

