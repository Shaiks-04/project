const express = require("express");
// const bcrypt=require("bcrypt");
const cors=require("cors");
// const UserRoutes=require('./Routes/UserRoutes')

const app = express();
app.use(cors())

app.use(express.json())

// app.use('/api',UserRoutes)

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = "mongodb+srv://shaikrahaman04:shaik123@cluster0.fqimvvo.mongodb.net/";
const connection=require("./config/mongoose")
//routes 
const cartroute = require("./route/cartroute");
const productroute = require("./route/productroute");
const userroute= require("./route/userroute");
//Model
// const cart = require("./Model/cartStructure");
// const product = require("./Model/productStructure");
// const user = require("./Model/userStructure");


app.use("/api", cartroute);
app.use("/api", productroute);
app.use("/api", userroute);

app.get("/", (req, res) => {
    res.send({ msg: "this is a testing phase" });
});

app.listen(3001, async () => {
    try {
        await connection(url);
        console.log("server running on port 3001");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});
