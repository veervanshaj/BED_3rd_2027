const fs=require("fs");
console.log("enter your name")
let a=process.argv[2];

fs.writeFile("./writeByTerminal",a,function(err,data){
if(err) return console.log(err)
    console.log("data written on file by taking input by terminal")
})