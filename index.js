//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const inputWeather = document.getElementById('input-weather');
const weatherBtn = document.getElementById('btn');
const  result = document.getElementById('result');

let getWeather = ()  => {

    let weatherInput = inputWeather.value;
    if(weatherInput.length === 0 ){
        result.innerHTML = `<h3>Please enter city name</h3>`
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&appid=${key}&units=metric`
       fetch(url)
       .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.weather[0].icon)
            console.log(data.weather[0].main)
            console.log(data.name)
            console.log(data.sys.country)
            console.log(data.main.temp)

           result.innerHTML = 
           `    <div class="weather-app">
                    <h2>${data.weather[0].main}</h2>
                    <p>${data.name},${data.sys.country}</p>
                    <img src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt = "icon" class = "icon">
                    <h1>${data.main.temp}</h1>
                </div>    
           `    
        })
        .catch(() => {
            result.innerHTML = `<h3>Country/City not found</h3>`
           })
    }
    
    

    
}

weatherBtn.addEventListener('click', getWeather)
