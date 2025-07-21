const fs=require("fs");
const {read}=require("../IOoperation/util")
// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err)
//         let users=JSON.parse(data);
//         console.log(users);
// })

async function readFile(filepath) {
    let data=await read(filepath);
    console.log(data)
    
}