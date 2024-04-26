const mongoose = require("mongoose")


const apischema = new mongoose.Schema({
    name: String,
    age:Number,
    gender:String,
    disease:String,
    createdBy: {
        type:Date,
        default: Date.now
    },
    userdetail:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userdetail", 
        required: true
    }
}) 

const childdetail = mongoose.model("child",apischema);

module.exports = childdetail;