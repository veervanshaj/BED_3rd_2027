const fs=require("fs");
fs.writeFile("../demo.txt","g26 hello",function(error,data){
    if(error) return console.log(err);
    console.log("hiii");
    })
fs.writeFile("../file.txt","node js give ability to js to do file operations",function(error,data){
    if(error) return console.log(err);
    console.log("file2 (file) executed");
    })

