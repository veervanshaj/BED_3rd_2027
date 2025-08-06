const express=require("express")
const app=express()
const fs=require("fs")
app.use(express.static(__dirname+"/public"))
app.get("/users",(req,res)=>{
fs.readFile("./users.json","utf-8",function(err,data){
    if(err) res.send(err);
    let alluser=JSON.parse(data);
    // console.log(alluser);
    res.json(alluser);
})
})

app.listen(3000,()=>{
    console.log("serr start")
})