const mongoose=require("mongoose")
const logoschema=mongoose.Schema({
    name:String,
    id:{
        type:Number,
        unique:true,
        required:true
    },
    img:{
        data:Buffer,
        contentType:String
    }
});
module.exports=mongoose.model("logo",logoschema)