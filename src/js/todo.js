const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteTodo(event){
    const listItem = event.target.parentElement;
    listItem.remove();
}

function paintToDo(newtodo){
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = newtodo;
    const button = document.createElement("button");
    button.textContent = "❌";
    button.addEventListener("click", deleteTodo);
    listItem.appendChild(span);
    listItem.appendChild(button);
    todoList.appendChild(listItem);

} 

function handleTodoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newtodo);
    paintToDo(newtodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
