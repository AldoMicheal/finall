const mongoose=require("mongoose")
const jobschema=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    country:{
        type:String,
        // required:true
    },
    name:{
        type:String,
        // required:true
    },
    description:{
        type:String,
    },
    type:{
        type:String,
    },
    salary:{
        type:String
    }
})
const job=mongoose.model("job",jobschema)
module.exports=job