const mongoose=require("mongoose")
const reviewschema=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true

    },
    name:{
        type:String,
        required:true
    },
    review_d:{
        type:String
    }
})
const rev=mongoose.model("rev",reviewschema)
module.exports=rev