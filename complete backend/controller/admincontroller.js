// const json=require("express")
// const express=require("express")
// const users=require("../models/admin")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")



// const signup=async(req,res)=>{
//     const{name,email,password,address,role}=req.body
//     if(!name || !email || !password){
//        return res.json({message:"required columns cannot be empty"})
//     }
//     let user=await users.findOne({email})
//     if(user){
//         return res.json({message:"user email already exist"})
//     }
//     const hashpassword=await bcrypt.hash(password,10)
//     const newuser=await users.create({name,email,password:hashpassword,address,role})
    
//     let token=jwt.sign({email:newuser.email,id:newuser._id},process.env.SECRET_KEY)
//     return res.status(200).json({token,newuser})
// }



// const login=async(req,res)=>{
//     const{email,password}=req.body
//     if(!email || !password){
//          return res.json({message:"required columns cannot be empty"})
//     }

//     let userdata=await users.findOne({email})
//     if(userdata && await bcrypt.compare(password,userdata.password)){
//         // let token=jwt.sign({email,id:userdata._id},process.env.SECRET_KEY)
//         let token = jwt.sign({ email: userdata.email, id: userdata._id }, process.env.SECRET_KEY);

//         return res.status(200).json({token,userdata})
//     }
//     else{
//         return res.json({message:"invlaid credentials"})
//     }
// }
// const getuser=async(req,res)=>{
//     const getuser=await users.findById(req.params.id)
//     return res.json({email:getuser.email})
// }
// module.exports={signup,login,getuser}

// const users = require("../models/admin")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

// const signup = async (req, res) => {
//     const { name, email, password, address } = req.body
//     if (!name || !email || !password) {
//         return res.json({ message: "required fields cannot be empty" })
//     }

//     let user = await users.findOne({ email })
//     if (user) {
//         return res.json({ message: "user email already exists" })
//     }

//     const hashpassword = await bcrypt.hash(password, 10)
//     const newuser = await users.create({
//         name,
//         email,
//         password: hashpassword,
//         address
//     })

//     let token = jwt.sign(
//         { email: newuser.email, id: newuser._id },
//         process.env.SECRET_KEY
//     )
//     return res.status(200).json({ token, newuser })
// }

const login = async (req, res) => {
    const { email, password } = req.body;
    
    // 1. Get static credentials from .env
    const STATIC_EMAIL = process.env.STATIC_ADMIN_EMAIL;
    const STATIC_PASSWORD = process.env.STATIC_ADMIN_PASSWORD;

    if (!email || !password) {
        return res.json({ message: "Required fields cannot be empty" });
    }

    // 2. Check against static credentials
    // Note: If you want to use bcrypt for the static password (best practice),
    // the STATIC_ADMIN_PASSWORD in .env must be a hashed value. 
    // For simplicity, we compare strings here.
    const isPasswordValid = (password === STATIC_PASSWORD); 

    if (email === STATIC_EMAIL && isPasswordValid) {
        
        // 3. Create a SIMULATED User Object (Since we don't fetch from DB)
        const simulatedUser = {
            _id: "static_admin_id", // Use a unique, constant ID
            email: STATIC_EMAIL,
            name: "Static Admin",
            isAdmin: true
        };

        // 4. Generate JWT with simulated user data
        let token = jwt.sign(
            { email: simulatedUser.email, id: simulatedUser._id, isAdmin: true },
            process.env.SECRET_KEY
        );

        // Success: Return the token and simulated user data
        return res.status(200).json({ token, userdata: simulatedUser });

    } else {
        // Failure
        return res.status(401).json({ message: "Invalid credentials" }); 
    }
};

// We don't need getuser or the users model lookup anymore, 
// but we keep a dummy getuser to prevent auth middleware from failing on initial DB lookup.

const getuser = async (req, res) => {
    // This function is still called by the frontend (in authmiddleware) 
    // to verify the token ID. Since we are static, we return a simulated response.
    return res.json({ email: process.env.STATIC_ADMIN_EMAIL, id: "static_admin_id" });
};


// 🚨 Update exports: Remove signup, keep login and getuser 🚨
module.exports = { login, getuser };
