// //accessing dom elemet
// //1.using id
// //2. using class
// //3. using tag
// //4.  querySelector/querySelectorAll

// // console.log(el1);
// // let el2=document.getElementsByClassName("item");
// // console.log(el2[0]);
// // let el3=document.getElementsByTagName("p");
// // console.log(el3);
// let el4=document.querySelector("p"); //this will not give collection, it will give first element
// console.log(el4);
// let el5=document.querySelectorAll(".item"); //this will give collection
// console.log(el5);
// let ul=document.querySelector("#container");

// //properties 
// /* 
// innerText
// innerHTML
// textContent
// */
// let data =el4.innerText; //this will give text inside the element
// console.log(data);

// el4.innerText="this is chnged by js"; //this will change the text inside the element

// let data2=ul.innerHTML; 
// let data3=ul.innerText; 
// let data4=ul.textContent; 
// console.log(data2);
// console.log(data3);
// console.log(data4);


// ul.innerHTML=` <li class="item">item 4</li>
//         <li class="item">item 5</li>
//         <li class="item">item 6</li>`

/* 
getAttribute
setAttribute
classList
*/

let el5=document.querySelector(".item"); //this will give collection
// console.log(el5);
console.dir(el5.getAttribute("id")); //this will give id attribute of the element
console.dir(el5.getAttribute("class")); //this will give class attribute of the element
el5.setAttribute("id","js"); //this will set id attribute of the element
console.dir(el5.getAttribute("id")); //this will give id attribute of the element


// Element.addEventListener("click",function(e){


// }); //this will add event listener to the element
let signUpbtn=document.querySelector(".signUp");
let form=document.querySelector("#signup");
signUpbtn.addEventListener("click",function(){
    // console.log("clicked");
    // form.style.display="block"; //this will show the form
    form.classList.toggle("hide"); //this will toggle the class hide
}); 