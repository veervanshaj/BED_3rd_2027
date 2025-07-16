// task for home if text file have spaces in it then how to read and store them into diffrent file with the spaces
//

const fs= require("fs");
let c="";
fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);


    fs.readFile("../file.txt","utf-8",function(err,data2){
    if(err) return console.log(err);
     c+=data1+"\n"+data2;
    fs.writeFile("./result1.txt",c,function(err,data){
        if(err) return console.log(err);
        console.log("task done");
    })
})
})

 // const fs= require("fs");
    // let a="",b="";
    // fs.readFile("../demo.txt","utf-8",function(err,data){
    //     if(err) return console.log(err);
    // a+=data;
    // })
    
    // fs.readFile("../file.txt","utf-8",function(err,data){
    //     if(err) return console.log(err);
    // b+=data;
    // })
    // let c="";
    // c+=a+b;
    // fs.writeFile("../task1",c,function(err,data){
    //     if(err) return console.log(err);
    //     console.log("task done");
    // })