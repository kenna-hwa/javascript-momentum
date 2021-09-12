const clock = document.querySelector("h2#clock");

const getClock = () => {
    const getDate = new Date();
    const hours = String(getDate.getHours()).padStart(2, "0");
    const minutes = String(getDate.getMinutes()).padStart(2, "0");
    const seconds = String(getDate.getSeconds()).padStart(2, "0");
    clock.textContent=`${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);