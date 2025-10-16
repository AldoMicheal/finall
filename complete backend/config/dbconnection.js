const mongoose=require("mongoose")
const dbconnection=async()=>{
    await mongoose.connect(process.env.connection_string)
    .then(()=>console.log("connected"))
}
module.exports=dbconnection