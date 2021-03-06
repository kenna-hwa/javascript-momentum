const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteTodo(event){
    const listItem = event.target.parentElement;
    listItem.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(listItem.id))
    console.log(listItem.id)
    saveToDos();

}

function paintToDo(newTodo){
    const listItem = document.createElement("li");
    listItem.id = newTodo.id;
    const span = document.createElement("span");
    span.textContent = newTodo.text;
    const button = document.createElement("button");
    button.textContent = "❌";
    button.addEventListener("click", deleteTodo);
    listItem.appendChild(span);
    listItem.appendChild(button);
    todoList.appendChild(listItem);

} 

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}