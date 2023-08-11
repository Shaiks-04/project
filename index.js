const express = require("express");
// const bcrypt=require("bcrypt");
const cors=require("cors");
const UserRoutes=require('./Routes/UserRoutes')

const app = express();
app.use(cors())

app.use(express.json())

app.use('/api',UserRoutes)

app.listen(3001,()=>{
    console.log("server running on port 3001");
})
