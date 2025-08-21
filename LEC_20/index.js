const express=require("express")
const mongoose = require('mongoose');
const {m1 ,m2} =require("./midlleware/firstmiddlerware.js")
const {m3}=require("./midlleware/pathlevel.js")
const userRouter=require("./routes/userRoutes.js")
const app=express()
app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/users",userRouter);
app.use(m1)
app.get('/health',m3,(req,res,next)=>{
  console.log("running controller functions")
  next()
return res.json({
    status:"ok",
    message:"server running ok"
  })
  // console.log("after response")
  
})


app.use(m2)
app.get("/home",(req,res,next)=>{
  console.log("running home end point")
  res.json({
    status:"ok",
    message:"server running ok"
  })
  
})



app.listen(3000,()=>{
    console.log("server started")
})

