const express =require("express")
const app=express();
const mongoose = require('mongoose');
const User=require("./model/user");
const user = require("./model/user");
console.log(User);
// app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/health',(req,res)=>{
  
return res.json({
    status:"ok",
    message:"server running ok"
  })
  // console.log("after response")
  
})
//end-point for signup--- adding new user into database
app.post("/api/users/signup",async(req,res)=>{


    try{

    let {name,email,password}=req.body;
    let userExist= await User.findOne({email:email});
    if(userExist){
        return res.json({
            success:false,
            message:"user already exist with this email plese login"
        })    
    }
    let newUser=new User({
        name:name,
        email:email,
        password:password
    })
    await newUser.save()
    res.json({
        success:true,
        message:"user registered succesfully , plese login to continue"
    })
    }
    catch(error){
        console.log(error.message)
        res.json({
        error:error.message
              })

    }
})

app.post("/api/auth/login",async(req,res)=>{
   try{
     const {email,password}=req.body;

    let userExist=await User.findOne({email:email})
    if(!userExist){
        return res.json({
            success:false,
            message:"user does not exsit plese signup"
        })
    }
    if(userExist.password!=password){
       return res.json({
            success:false,
            message:"Invalid password,plese try again"
        })
    }
    if(userExist.password===password){
        res.json({
            success:true,
            message:"login succesfully"
        })
    }
   }
   catch(err){
         console.log(error.message)
        res.json({
        error:error.message
              })
   }
    
})


app.listen(3000,()=>{
    console.log("server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/auth')
  .then(() => console.log("connected"));