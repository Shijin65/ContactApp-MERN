const mongoose = require("mongoose");

const connectDB = async () => {
try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connection to the database is established",connect.connection.host,connect.connection.name)  
} catch (error) {
    console.log("database connection failed",error);
    process.exit(1);
}
}   

module.exports = connectDB;