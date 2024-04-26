const express = require("express");
const app = express();
const db =  require("./database/databases.js");
const userrouter = require("./router/user.js");
const childrouter = require("./router/child.js")
const { config } = require("dotenv");
const cookieparser = require("cookie-parser")

config({
    path: "./database/config.env"
})


//middleware 
app.use(cookieparser())
app.use(express.json());
app.use("/user",userrouter)
app.use("/child",childrouter)


db()


app.listen(5020, () => {
    console.log("listening to the port")
});

// const express = require("express");
// const app = express();
// const db = require("./database/databases.js");
// const userrouter = require("./router/user.js");

// // Middleware to parse JSON-encoded request bodies
// app.use(express.json());

// // Mount the user router at the specified path
// app.use("/api", userrouter); // Assuming you want to prefix all routes with '/api'

// // Connect to the database
// db();

// // Start the server
// const PORT = process.env.PORT || 5020;
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
