const mongoose = require("mongoose");


const db = () => {
    mongoose.connect("mongodb://localhost:27017",{
    dbname: "childrenraise",
})
.then(console.log("database connected"))
.catch((e) => console.log("error to connect database" + e))
}
module.exports = db;