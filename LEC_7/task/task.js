// by callback
const fs=require("fs")
user1=[{
    name:"suraj",
    group:26
},{
    name:"ram",
    group:26
}
]

user2=[{
    name:"veer",
    group:26
},{
    name:"vanshaj",
    group:26
}
]
fs.writeFile("./user1.txt",JSON.stringify(user1),function(err){
    if(err) console.log(err)
        console.log("user1 data uploded");
})

fs.writeFile("./user2.txt",JSON.stringify(user2),function(err){
    if(err) console.log(err)
        console.log("user2 data uploded");
})


//------------------
// read and store
const { json } = require("stream/consumers");
let users;
fs.readFile("./user1.txt","utf-8",function(err,data1){
     if(err) return console.log(err)
     data1=JSON.parse(data1);
    //  console.log(data1);

     fs.readFile("./user2.txt","utf-8",function(err,data2){
     if(err) return console.log(err)
     data2=JSON.parse(data2);
    //  console.log(data2);
    users = data1.concat(data2);   //user = [...data1, ...data2]; another method
    console.log(users);
        fs.writeFile("./users.txt",JSON.stringify(users),function(err){
            if(err) return console.log(err);
                console.log("users data merged and uploded");
        })
    })


})