function getUserData(URL){
    fetch(URL)      //fetch mai 2 .then lagta hai
    .then((res)=>{
        console.log(res)
        return res.json()  //data body sa aaraha ha
    })
    .then ((data)=>{
        console.log(data)
        data.forEach( displayUser);
    })
    .catch((err)=>{
        console.log(err);
    })
}
let userContainer=document.querySelector(".user-container")
function displayUser(user){
    //0:{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}

    let li=document.createElement("li")
    // li.attributes("class","user-item")
    li.classList.add("user-item")
    li.innerHTML=`<div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="user-delete">❌</button>
                <button class="user-edit">🖋️</button>
            </div>`
        userContainer.appendChild(li);
}

// getUserData("https://jsonplaceholder.typicode.com/users");
getUserData("http://localhost:3000/users");