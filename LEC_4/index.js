// function buyProduct(product_Name,cb){
//     //do some asynchronus operation
//     setTimeout(()=>{
//         //all the operation completed
//         console.log("all io operation completed and order deatila are written in user data ");
//         cb();
//     })
// }

// buyProduct("Iphone 16",function(){
//     console.log("product os purchesed")
// })

let product=[{
    name:"samsung",
    amount:70000,
    quantity:100
},{
    name:"Iphone 16",
    amount:10000,
    quantity:0
}]

function buyProduct(product_Name,cb){
    //do some asynchronus operation
    let isProduct=product.filter((p)=> p.name==product_Name)[0];
    if(!isProduct){
        console.log("product is not avalable",null)
    }
    else{
    cb(null,isProduct.amount);
}
    // console.log(isProduct);
}

let avalableAmount=800000
function deductbankamount(amount,cb){
//do some bank transations    
    if(amount>avalableAmount){
        return cb("bank balance is low",null)
    }
    else{
        avalableAmount-=amount
        cb(null,"amount deducted")
        cb(null,"amount deducted")
    }

    }

buyProduct("Iphone 16",function(err,amount){
    if(err) return console.log(err)
    console.log(amount)
    deductbankamount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message);

    })
})


// const fs = require("fs");
// fs.readFile("filepath","utf-8")

