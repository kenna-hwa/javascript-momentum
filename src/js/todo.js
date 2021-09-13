const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");


function paintToDo(newtodo){
    const listItem = document.createElement("li");
    const span = document.createElement("span")
    listItem.appendChild(span)
    span.textContent = newtodo;
    todoList.appendChild(listItem);
} 

function handleTodoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newtodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
