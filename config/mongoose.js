require('dotenv').config(); // Load environment variables from .env file
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL; // Use environment variable for MongoDB URL
mongoose.set("strictQuery",true)
const connection=async()=>{
    try{
       await mongoose.connect(url)
        console.log("server connected with the database")
    }
    catch(err){
        console.log(err,"error connection")
    }
}
module.exports=connection;