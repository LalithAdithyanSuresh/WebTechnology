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

function ReadyOptions(){
    for(data of weatherData){
        let div = document.createElement('div');
        div.classList.add('opt');
        div.onclick = "selectLocation()";
        div.innerText = data.location;
        options.appendChild(div);
    }
}
function LoadWeatherData(id){
    const data = weatherData[id-1];
    weatherContents.location.innerText = data.location;
    weatherContents.curr_temp.innerText = data.temp.actual;
    weatherContents.curr_text.innerText = data.temp.text;
    weatherContents.feelsLike.innerText = data.temp.feels;
    weatherContents.humidity.innerText = data.metrics.humidity;
    weatherContents.rain.innerText = data.metrics.rain;
    weatherContents.wind.innerText = data.metrics.wind;
    weatherContents.vis.innerText = data.metrics.visibility;
    weatherContents.pressure.innerText = data.metrics.pressure;

}
function selectLocation(id){
    console.log(id);
    LoadWeatherData(id);
    toggleOptions();
}

function toggleOptions(){
    options.classList.toggle('open');
}

// ReadyOptions();