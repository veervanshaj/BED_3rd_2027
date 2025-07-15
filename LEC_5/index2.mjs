//convert lec_4 callback in index.js to promise function


//state pending , fulfilled(.then(()=>{})) , rejected(.catch(()=>{}))
// let p=new Promise((resolve,reject)=>{
//     resolve("wada poora kiya")
// })
// // console.log(p);
// p.then(()=>{
//     console.log(data)
// })

// .catch((err)=>{
//     console.log(err)
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


function buyProduct(product_Name) {
    return new Promise((resolve,reject)=>{

          let isProduct = product.find((p) => p.name === product_Name); 

    if (!isProduct) {
       return reject("Product is not available");
    } else {
        resolve(isProduct.amount);
    }

    })
  
}


let avalableAmount=800000
function deductbankamount(amount,cb){
    return new Promise((resolve,reject)=>{
        if(amount>avalableAmount){
            return reject("bank balance is low")
        }else{
            avalableAmount-=amount;
            resolve("amount dected")
        }
    })
}






buyProduct("Iphone 16") .then((amount)=>{

    console.log(amount);
    console.log("product is accepted");
    return deductbankamount(amount)
})
.then((amount)=>{
    console.log(amount);

})

.catch((err)=>{
    console.log(err)
})

// ya uper 2 promis laga hai do inter dependent hai

// console.log("start")
// let a=10;
// let b=15;
// let c=a+b;
// function sum(a,b){
//     return a+b
// }
// let result =sum(4,5)
// console.log(result)
async function domytask() {
    try{
    
    let amount=await buyProduct("Iphone 16");
    let mes=await deductbankamount(amount);
    console.log(mes)

}

catch(error){
console.log(err)
}
}
console.log(domytask());
console.log(start);
