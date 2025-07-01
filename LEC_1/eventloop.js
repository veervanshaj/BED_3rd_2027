const fs =require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timmer callback")
},0)
setImmediate(()=>{
    console.log("set immidiate callback")
})

fs.readFile("demo.txt",(data)=>{
    console.log("poll phase call back");
    setTimeout(() => {
        console.log("timmer 2")
    }, 0);

    setImmediate(()=>{
    console.log("immd 2")
})


})
console.log("end");