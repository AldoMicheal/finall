const json=require("express")
const job=require("../models/review")


const add=async(req,res)=>{
    const{id,name,review_d}=req.body
    if(!id){
        return res.json({message:"REQUIRED FIELDS CANNOT BE EMPTY"})
    }
    let j=await job.findOne({id:parseInt(id)})
    if(j){
        return res.json({message:"REVIEWER ID ALREADY EXISTS"})
    }
    const newjob=await job.create({id,name,review_d})
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
        return res.json({message:" REVIEW DELETED SUCCESSFULLY"});
    }
    else{
        return res.status(404).json({message:"REVIEW NOT FOUND"});
    }
}

module.exports={add,getall,get,del}