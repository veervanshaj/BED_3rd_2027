const express=require("express")
const app=express();
const fs=require('fs');

app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.get('/',(req,res)=>{
//     // res.send('Hello world')   //can send text
//     res.sendFile(__dirname+"/index.html")   
  
// })
// app.get('/about',(req,res)=>{
//     // res.send('Hello world')   //can send text
//     res.sendFile(__dirname+"/index.html")   
  
// })
app.post('/users',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    res.json({
        username,
        password
    })
    //now add data to file
     let alluser=[];
        let newuser={username,password}
    
        fs.readFile("./userdata.json","utf-8",function(err,data){
            if(err) return res.send(err)
    
                alluser=JSON.parse(data);
                alluser.push(newuser);
    
    
               fs.writeFile('./userdata.json',JSON.stringify(alluser),function(err){
                 if(err) return res.send(err);
            res.send("done writing") 
        })
    })



})

app.listen(3000,function(){
    console.log("server start")
})