const express = require("express")
const app =express()
const fs=require('fs');
// const { json } = require("stream/consumers");
app.use(express.json())  //   express.json() for pars the data

let data;
// app.post('/user', (req, res) => {
//      data=req.body;
//     // res.send(` ffd $(data) dsd`);
//     console.log(data)

//     fs.readFile("./")

//     fs.writeFile('./userdata',JSON.stringify(data),function(err){
//     if(err) console.log(err)
//         console.log("done writing")

// })

// })

app.post('/reg', (req, res) => {
    //  data=req.body;
    // res.send(` ffd $(data) dsd`);
    // console.log(newuser)
    let name=req.body.name;
    let password=req.body.password;
    // console.log(name)
    let alluser=[];
    let newuser={name,password}

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