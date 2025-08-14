const express=require("express")
const mongoose = require('mongoose');
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const Users=require("./model/user.js")
// app.use(express.static(__dirname+"/public"))
const Blogs=require("./model/blogs.js")

app.post("/blog",(req,res)=>{
    let {title,body} =req.body;
    console.log(title,body);
    res.send("got it") 
})

app.post("/blogs",async (req,res)=>{
    let {title,body,userId} =req.body;
    let userExist= await Users.findById(userId);
    if(userExist){
    let newBlog=new Blogs({
        title:title,
        body:body,
        data:Date.now(),
        userId:userId
    })

  await newBlog.save();
  userExist.blogs.push(newBlog._id)
  await userExist.save();
  res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
  })
 }
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
    let userExist= await Users.findOne({_id:id}).populate("blogs");
    if(userExist){
    res.json({
        success:true,
        data:user
    })
    }
})


//delete blog
app.delete("/blogs/:blogId", async (req,res)=>{
    let {blogId}=req.params;
    let {userId}= req.body;
    let blogExist= await Blogs.findById(blogId);
    if(!blogExist) return req.json({
        success:false,
        message:"Blog does not exist"
        
    })

    if(blogExist.userId!=userId) return res.json({
         success:false,
        message:"not allowedt"
    })
    await Blogs.findByIdAndDelete(blogId);

    let userExist = await Users.findById(userId);
    let blog=userExist.blogs.filter((id)=> id!=blogId)
    userExist.blogs=blog
    await userExist.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data:userExist
    })
})



app.listen(3000,()=>{
    console.log("server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log("connected"));