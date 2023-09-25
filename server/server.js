const express = require ("express");
const errorHandler = require("./src/middleware/errorHandler");
const connectDB = require("./src/Config/DBconnection");
const dotenv = require("dotenv").config();


connectDB(); 

const app = express();
const port=process.env.PORT;

app.use(express.json());
app.use(require("cors")());  
app.use("/api/contact", require("./src/routes/contact_route"));
app.use("/api/user", require("./src/routes/user_route"));
app.use(errorHandler);

if(connectDB){app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})}