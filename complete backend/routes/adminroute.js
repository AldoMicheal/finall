const express=require("express")
const router=express.Router()
const controller_variable=require("../controller/admincontroller")


// router.post("/signup",controller_variable.signup)
router.post("/login",controller_variable.login)
router.get("/byid/:id",controller_variable.getuser)

module.exports=router