function drawWeatherIcon(d) {

    const image = document.getElementById('weatherIcon');
    

    if(d.weather[0].description == 'haze'){
        image.src = "../weather-icons-master/svg/wi-day-haze.svg";
    }else if(d.weather[0].description == 'clear sky'){
        image.src = "../weather-icons-master/svg/wi-day-sunny.svg";
    }else if(d.weather[0].description == 'few clouds'){
        image.src= "../weather-icons-master/svg/wi-day-cloudy.svg";
    }else if(d.weather[0].description == 'overcast clouds'){
        image.src = "../weather-icons-master/svg/wi-day-cloudy-high.svg";
    }

}


function getVisibility(d) {
    let visibility = d.visibility;
    visibility = visibility / 1000;
    
    const visibilityOutput = document.getElementById('visibility').innerHTML = visibility + ' km';
}

function getPressure(d) {
    let pressure = d.main.pressure;
    pressure = pressure / 10;

    const pressureOutput = document.getElementById('pressure').innerHTML = pressure + " kPa";
}



function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);

}



function getDate () {
    const currentDate = new Date();
    

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDay = days[currentDate.getDay()];
    
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const dateString = currentDay + ' ' + currentDate.getDate() + ' ' + currentMonth + ', ' + currentYear;

    const dateOutput = document.getElementsByClassName('date')[0].innerHTML = dateString;
    
}

function drawWeather(d){

    const tempOutput = document.getElementById('temp');
    const descriptionOutput = document.getElementById('description');
    const humidityOutput = document.getElementById('humidity');
    const cityNameOutput = document.getElementById('city-name');
    const maxTemp = document.getElementById('max-temp');
    const minTemp = document.getElementById('min-temp');


    const forecastCap = capitalize(d.weather[0].description);
    
    cityNameOutput.innerHTML = d.name;
    tempOutput.innerHTML = Math.floor(d.main.temp - 273.15);
    descriptionOutput.innerHTML = forecastCap;
    maxTemp.innerHTML = Math.floor(d.main.temp_min - 273.15) + "&deg;C";
    minTemp.innerHTML = Math.floor(d.main.temp_max - 273.15) + "&deg;C";
    humidityOutput.innerHTML = d.main.humidity + "%";
    
}