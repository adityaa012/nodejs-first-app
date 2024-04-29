const express = require("express");
const app = express();
const db =  require("./database/databases.js");
const userrouter = require("./router/user.js");
const childrouter = require("./router/child.js")
const { config } = require("dotenv");
const cookieparser = require("cookie-parser")
const errormiddleware = require("./authorization/error.js")
const cors = require("cors");



config({
    path: "./database/config.env"
})


//middleware 
app.use(cookieparser())
app.use(express.json());
app.use("/user",userrouter)
app.use("/child",childrouter)
app.use(cors({
    origin:[process.env.frontend_url],
    methods:["GET" , "POST","PUT","DELETE"],
    credentials:true,
}))

app.use(errormiddleware)

db()


app.listen(process.env.port_no, () => {
    console.log(`listening to the port: ${process.env.port_no} in ${process.env.NODE_ENV} mode`)
}); 

  

