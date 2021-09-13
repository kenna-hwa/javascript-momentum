const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

todoInput.addEventListener("submit", addTodo);

function addTodo(e){
    e.preventDefault();
    const todo = todoInput.value;
    const todoLi = document.createElement("li");
    todoLi.textContent = todo;
    todoList.appendChild(todoLi);
}
