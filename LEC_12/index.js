let div=document.querySelector(".rcolour")
let button=document.querySelector(".CC")
// let colour=
// console.dir(div)
let c=["red", "green", "blue" , "yellow", "orange" , "purple", "black"];
let intervalId=null;
// div.style.backgroundColor="red";
let stopbtn=document.querySelector(".stop");
function radomColor() {
    let index=Math.floor(Math.random()*10)
    let color=c[index];
    return color;

}

button.addEventListener("click",function(){
    intervalId=setInterval(()=>{
    let color=radomColor();
    div.style.backgroundColor=color;
   },50);
    // let color=radomColor();
    //   div.style.backgroundColor=color;
}); 

stopbtn.addEventListener("click",function(){
if(intervalId){
    clearInterval(intervalId);
}
});
