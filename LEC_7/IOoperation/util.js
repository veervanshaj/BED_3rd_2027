const fs= require("fs");
const { resolve } = require("path");
// const { rejects } = require("assert");
// const { resolve } = require("path");
const { json } = require("stream/consumers");

function read(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile("../users.txt","utf-8",function(err,data){
            if(err) return reject(err)
                let users=JSON.parse(data);
                resolve(users);
        })
    })
}

function write(filepath,data){
        fs.writeFile("../users.txt",JSON.stringify(users),function(err){
            if(err) return reject(err);
            resolve("users done")
        })
}

module.exports.read=read;