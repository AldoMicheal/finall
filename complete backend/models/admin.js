const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
        
    },
    address:{
        type:String
    }
})

const user=mongoose.model("user",userschema);
module.exports= user;