const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button")

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    if(!username){
        alert("이름을 입력해주세요")
    }else if(username.length > 15){
        alert("이름은 10자 이내로 입력해주세요")
    }
}

loginForm.addEventListener("submit", onLoginSubmit)