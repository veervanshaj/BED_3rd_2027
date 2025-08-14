const express=require("express")
const mongoose = require('mongoose');
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname+"/public"))
const Blogs=require("./model/blogs.js")

app.post("/blog",(req,res)=>{
    let {title,body} =req.body;
    console.log(title,body);
    res.send("got it") 
})

app.post("/blogs",async (req,res)=>{
    let {title,body} =req.body;
    let newBlog=new Blogs({
        title:title,
        body:body,
        data:Date.now()
    })
  await newBlog.save();
  res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
  })
})

app.get("/blogs", async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog,
        message:"blog added successfully"
    })
})

app.get("/blogs/:id",async (req,res)=>{
    let {id}=req.params;
    let blog= await Blogs.findOne({_id:id})
    res.json({
        success:true,
        data:blog
    })
})

////class HW to get data for users
//add new user
const Users=require("./model/user.js")
app.post("/users",async (req,res)=>{
    let {Name,email,password} =req.body;
    let newUser=new Users({
        Name:Name,
        email:email,
        password:password
    })
  await newUser.save();
  res.json({
    success:true,
    data:newUser,
    message:"user added successfully"
  })
})

//see all users ans its data
app.get("/users", async(req,res)=>{
    let allUsers=await Users.find();
    res.json({
        success:true,
        data:allUsers,
        message:"user added successfully"
    })
})

//see user bu if 
app.get("/users/:id", async(req,res)=>{

  let {id}=req.params;
    let user= await Users.findOne({_id:id})
    res.json({
        success:true,
        data:user
    })
})






app.listen(3000,()=>{
    console.log("server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log("connected"));