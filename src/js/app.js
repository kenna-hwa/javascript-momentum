
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    if(!username){
        alert("이름을 입력해주세요")
        return false;
    }else if(username.length > 15){
        alert("이름은 10자 이내로 입력해주세요")
        return false;
    }
    localStorage.setItem("username", username);
    const printName = localStorage.getItem("username")

    if(printName) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.textContent=`WELCOME ${printName}!`;
    }   
    
    return true;

}

loginForm.addEventListener("submit", onLoginSubmit)

