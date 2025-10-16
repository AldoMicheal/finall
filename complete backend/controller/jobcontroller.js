const json=require("express")
const job=require("../models/job")


const add=async(req,res)=>{
    const{id,country,name,description,type,salary}=req.body
    if(!id){
        return res.json({message:"REQUIRED FIELDS CANNOT BE EMPTY"})
    }
    let j=await job.findOne({id:parseInt(id)})
    if(j){
        return res.json({message:"JOB ALREADY EXISTS"})
    }
    const newjob=await job.create({id,country,name,description,salary})
    return res.json(newjob)
}

const getall=async(req,res)=>{
    const j=await job.find()
    return res.json(j)

}


const get=async(req,res)=>{
    const j=await job.findOne({id:parseInt(req.params.id)})
    return res.json(j)
}



const del=async(req,res)=>{
    const j=await job.findOneAndDelete({id:parseInt(req.params.id)});
    if(j){
        return res.json({message:" JOB DELETED SUCCESSFULLY"});
    }
    else{
        return res.status(404).json({message:"JOB NOT FOUND"});
    }
}

module.exports={add,getall,get,del}