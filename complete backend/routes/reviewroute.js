const express=require("express")
const reviewc=require("../controller/reviewcontroller")
const admin=require("../middleware/authmiddleware")
const router=express.Router()

router.post("/add",reviewc.add)
router.get("/getall",reviewc.getall)
router.get("/get/:id",reviewc.get)
router.delete("/delete/:id",reviewc.del)

module.exports=router