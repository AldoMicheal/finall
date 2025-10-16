const express=require("express")
const jobc=require("../controller/jobcontroller")
const admin=require("../middleware/authmiddleware")
const router=express.Router()


router.post("/add",jobc.add)
router.get("/getall",jobc.getall)
router.get("/get/:id",jobc.get)
router.delete("/delete/:id",jobc.del)

module.exports=router