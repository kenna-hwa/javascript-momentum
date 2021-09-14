const API_KEY = "98193d62a10d56e4e610ba2da86bbb7d";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.textContent = data.name;
        weather.textContent = `${data.weather[0].main} / ${data.main.temp}`;
    }))

}
function onGeoErr(){
    alert("Can't find you. No Weather info for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)