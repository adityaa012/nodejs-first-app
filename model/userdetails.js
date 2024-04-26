const mongoose = require("mongoose");

const apischema = new mongoose.Schema({
     name: String,
     gender: String,
     relation: String,
     city: String,
     email: {
          required:true,
          type: String,
          unique: true
      },
  
      password: {
          required: true,
          type: String,
      } 
});

const userdetail = mongoose.model("userdetails", apischema);

module.exports = userdetail;