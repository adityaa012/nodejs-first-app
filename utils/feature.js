const jwt = require("jsonwebtoken");

const sendcookie = (userss, res, message) => {
    const token =  jwt.sign({_id:userss._id},"hdicihfjiddcnjdidjeijfd");
     
    res.status(200).cookie("token", token,{
        httpOnly:true,
        maxAge: 15 * 60 * 1000
    })
    .json({
        success:true,
        message
    })
}


module.exports = sendcookie;

