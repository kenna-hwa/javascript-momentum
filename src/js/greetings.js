
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

// string 변수 저장
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

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
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

const paintGreetings = (name) => {
    greeting.textContent = `Welcome ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    // show the h1greeting
    paintGreetings(savedUsername)

}