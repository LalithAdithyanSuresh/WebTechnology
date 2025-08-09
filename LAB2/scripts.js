const options = document.getElementById('options');
const weatherContents = {
    location : document.getElementById('place'),
    curr_temp : document.getElementById('curr_temp'),
    curr_text : document.getElementById('curr_text'),
    feelsLike : document.getElementById('feelsLike'),
    humidity : document.getElementById('humidity'),
    rain : document.getElementById('rain'),
    wind : document.getElementById('wind'),
    vis : document.getElementById('visibility'),
    pressure : document.getElementById('pressure'),
}

function ReadyOptions(cities) {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';
    
    if (!cities || cities.length === 0) {
        let div = document.createElement('div');
        div.classList.add('opt');
        div.innerText = "No cities found.";
        options.appendChild(div);
        return;
    }
    
    for (const city of cities) {
        if (city.type != "CITY"){
            continue;
        }
        let div = document.createElement('div');
        div.classList.add('opt');
        div.innerText = `${city.name}, ${city.countryCode}`;
        
        div.onclick = () => selectLocation(city.name); 
        
        answers.appendChild(div);
    }
}
function LoadWeatherData(data){
    weatherContents.location.innerText = data.name;
    weatherContents.curr_temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
    weatherContents.curr_text.innerText = data.weather[0].description;
    weatherContents.feelsLike.innerText = `${Math.round(data.main.feels_like - 273.15)}°C`;
    weatherContents.humidity.innerText = `${data.main.humidity}%`;
    weatherContents.rain.innerText = data.rain ? `${data.rain['1h']} mm` : '0 mm';
    weatherContents.wind.innerText = `${data.wind.speed} m/s`;
    weatherContents.vis.innerText = `${data.visibility} m`;
    weatherContents.pressure.innerText = `${data.main.pressure} hPa`;
    document.getElementById('weathericon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    console.log(data.weather[0].icon);
}

async function selectLocation(name){
    const weatherData = await getData(name);
    if (weatherData) {
        LoadWeatherData(weatherData);
    }
    toggleOptions();
}

function toggleOptions(){
    options.classList.toggle('open');
}

// ReadyOptions();

getData("chennai");

document.getElementById('placeSearch').addEventListener('input', (event) => {
    const inputValue = event.target.value;
    if (inputValue!= ""){
        debounceGetCities(inputValue);
    }
});
let timeoutId = null;


async function debounceGetCities(inputValue) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(async () => { 
        if (inputValue.length > 0) {
            const cities = await getCityOptions(inputValue);
            if (cities.length > 0) {
                ReadyOptions(cities);
            }
        }
    }, 1000); 
}