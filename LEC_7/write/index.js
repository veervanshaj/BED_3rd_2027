let users=[{
    name:"veer",
    age:20,
    address:"ambala"
},{
    name:"vanshaj",
    age:20,
    address:"cantt"

}]
const fs=require("fs");
// fs.writeFile("../users.txt",JSON.stringify(users),function(err){
//     if(err) return console.log(err);
//     console.log("users done")
// })

async function writeFile(filepath) {
    await read(filepath,users);
    
}