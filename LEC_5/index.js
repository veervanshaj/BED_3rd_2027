let users=[{
    id:1,
    name:"veer",
    age:20
},
{
    id:2,
    name:"vanshaj",
    age:20

}
]

function isAllowed(id){
    // for(let i=0;i<users.length;i++){
    //     if(users[i].id===id){
    //         if(users[i].age>18) {
    //             console.log(users[i]);
    //             return true;
    //         }
    //         else return false;
    //     }
    // }
    // console.log("user no found with id ",id);

    // or filter method

//     let user=user.filter((u)=>{
//         return u.id==id
//     })[0]
//     console.log(user);
//     if(!user) return console.log("No user found")
//     if(user.age<18 ) return console.log("Not elegible to vote")
//         return console.log("elegible to vote")

        // by Promise
    return new Promise((resolve,reject=>)=>{
        let user=user.filter((u)=>{
        return u.id==id
    })[0]
    console.log(user);
    if(!user) return reject("No user found")
     if(user.age<18 ) return console.log("Not elegible to vote")
        return console.log("elegible to vote")

    })
}

isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
    
})

console.log("start")
console.log("sum 2 number")