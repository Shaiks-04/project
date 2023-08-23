const express = require("express");
// const bcrypt=require("bcrypt");
const cors=require("cors");
// const UserRoutes=require('./Routes/UserRoutes')
require('dotenv').config()
const app = express();
app.use(cors({origin:'*'}))

app.use(express.json())

// app.use('/api',UserRoutes)

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = process.env.MONGODB_URL;
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

const port = process.env.PORT || 3001;

app.listen(port, async () => {
    try {
        await connection(url);
        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});

