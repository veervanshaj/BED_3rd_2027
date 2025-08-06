const express = require("express")
const app =express()

app.get('/',(req,res)=>{
    // res.send('Hello world')   //can send text
    // res.send('<h1>olk<h1>')  //can send html
    // res.sendFile(__dirname+"/index.html")   //can send file
    // res.json({                       //can send json 
    //     name:"veer",
    //     age:20
    // })

    res.end("hi")
})
//path -varuiable
//1) query parameter
app.get("/watch",(req,res)=>{   //use & for multipal query parameter
    let videoId=req.query.v
    // console.log(req.query.v);
    let nId=req.query.n
    res.send("id got it"+" "+videoId+" "+nId)
})

//2 .params
app.get("/watch/:v/:n",(req,res)=>{
    console.log(req.params.v)
    console.log(req.params.n)
res.send("got it !!!")
})
app.listen(3000,function(){
    console.log("server start")
})