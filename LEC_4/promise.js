
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

buyProduct("samsung") .then((amount)=>{

    console.log(amount);
    console.log("product is accepted");
})

.catch((err)=>{
    console.log(err)
})