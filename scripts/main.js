getWeatherData('Vancouver');
getDate();



function getWeatherData(cityName){

    
    const fetchURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=52da8ce1ba4c4a8997fc21fdc9390a7d`;

    fetch(fetchURL)
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                console.log("network error");
            }
        })
        .then(function(data) {
            
            drawWeather(data);
            drawWeatherIcon(data);
            getVisibility(data);
            getPressure(data);

        })
        .catch(function(){
            console.log("Catch fetch error");
        });

    
}












