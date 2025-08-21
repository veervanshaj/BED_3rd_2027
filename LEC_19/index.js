const express=require("express")
const mongoose = require('mongoose');
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// const Users=require("./model/user.js")
// app.use(express.static(__dirname+"/public"))
// const Blogs=require("./model/blogs.js")


let blogRoute=require("./routes/blogRoutes.js") // jo bhi blog wali api hogi vo blogRoute wali file mai chali gai gi
app.use("/api/blogs",blogRoute)   //ya hamari base api hogi


let userRoute=require("./routes/userRoutes.js") 
app.use("/api/users",userRoute)  



app.listen(3000,()=>{
    console.log("server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log("connected"));