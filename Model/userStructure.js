const mongoose=require("mongoose")
const userStructure=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true,
    }
})

const user=mongoose.model("User",userStructure)
module.exports=user;