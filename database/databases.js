const mongoose = require("mongoose");


const db = () => {
    mongoose.connect(process.env.mongoose_url,{
    dbname: "childrenraise",
})
.then((c) => console.log(`database connected + ${c.connection.host}`))
.catch((e) => console.log("error to connect database" + e))
}


module.exports = db;