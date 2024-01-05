const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: 'f9f2cb4ffba25415fb74a9adb182e166'
}

const city = document.querySelector('#inp');
city.addEventListener('keydown', enter);

function enter(e) {
    if(e.keyCode === 13) {
        getInfo(city.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&APPID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    const temp = result.main.temp;
    const feelsLike = result.main.feels_like;
    const tempMin = result.main.temp_min;
    const tempMax = result.main.temp_max;
    const cityName = result.name;
    const country = result.sys.country;
    const cond = result.weather[0].main;

    const cityN = document.querySelector('#city');
    cityN.textContent = `${cityName}, ${country}`;

    getCurrentDate();

    temperature.textContent = `${Math.round(temp)}°`;

    const feelsL = document.querySelector('#feelsLike');
    feelsL.textContent = `Feels like: ${Math.round(feelsLike)}°`;

    conditions.textContent = cond;
    varation.textContent = `Min: ${Math.round(tempMin)}° Max: ${Math.round(tempMax)}°`;
}

function getCurrentDate () {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let dateDay = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    document.querySelector('#date').textContent = `${dateDay} ${month} ${year}, ${day}`;
}