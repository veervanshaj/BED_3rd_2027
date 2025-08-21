const express= require("express")
const router=express.Router()
const Users=require("../model/user.js")

const {postaddUser,getReadUsers,getOneUser}= require("../controller/userController.js")
//add new user

router.post("/",postaddUser)

//see all users ans its data
router.get("/",getReadUsers)

//see user bu if 
router.get("/:id",getOneUser)


module.exports=router