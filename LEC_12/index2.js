//1. create a new element using createElement function
//2 insert requred data in that element using innerHTML or innerText
//3. insert new element in the parent container using appendChild or append
let 
let todo={
    id:12,
    title:"padhai kar le"
}

let todoContainer=document.querySelector(".todocontainer");
function addTodo(todo){
    let li =document.createElement("li");
    li.innerHTML=`
            <div>
                input type="checkbox" name="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>🖋️</button>
                </div>
            </div>`
    todoContainer.appendChild(li)
}
function showAllTodos(todos){
    todos.forEach(todo => {
        addTodo(todo)
        
    });
}

showAllTodos(todo);

  
