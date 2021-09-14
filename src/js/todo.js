const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
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


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(element => console.log("this is " + element));
}