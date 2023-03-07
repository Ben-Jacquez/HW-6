// Open Weather API Key
var APIKey = "1334c975c9959428cd572b00adc9c533";

// Functions
// Takes User Input And Sets It As City Value For Fetch Weather & Forecast
function userInput() {
    const searchedCity = searchInput.value.trim();
    if (searchedCity) {
        storeSearch(searchedCity);
        fetchWeather(searchedCity);
        fetchForecast(searchedCity);
        searchInput.value = "";
    }
}

// Save User Input In Local Storage And Add It To A List To Be Called Later
function storeSearch() {
    var previousSearches = JSON.parse(localStorage.getItem("")) || [];
    previousSearches.push();
    previousSearches = JSON.stringify(previousSearches);
    localStorage.setItem("", previousSearches);
}

// Pulls Weather Data From OpenWeatherMap & Starts PostWeather
async function fetchWeather(city) {
    try {
        var currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`);
        var currentData = await currentResponse.json();
        postWeather(currentData);
    } 
    catch (error) {
        alert(error.message);
    }
}

// Pulls Forecast Data From OpenWeatherMap & Starts PostForecast
async function fetchForecast(city) {
    try {
        var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKey}`);
        var data = await response.json();
        postForecast(data);
    } 
   catch (error) {
        alert(error.message);
    }
}

// Posts Weather Data To Divs In Current Weather
function postWeather(currentData) {
    var currentDate = document.querySelector(".current-date");
    var currentCity = document.querySelector(".current-city");
    var currentIcon = document.querySelector(".current-icon");
    var currentTemp = document.querySelector(".current-temp");
    var currentWind = document.querySelector(".current-wind");
    var currentHumidity = document.querySelector(".current-humidity");
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var todaysDate = `${day}-${month}-${year}`;
    var { name } = currentData;
    var { icon } = currentData.weather[0];
    var { temp, humidity } = currentData.main;
    var { speed } = currentData.wind;
    currentCity.innerText = `Weather In ${name}`;
    currentDate.innerText = `${todaysDate}`;
    currentIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    currentTemp.innerText = `${temp}°F`;
    currentWind.innerText = `Wind: ${speed}mph`;
    currentHumidity.innerText = `Humidity: ${humidity}%`;
}

// Posts Forecast Data To Divs In Forecast Container
function postForecast (data) {
    // Forecast Day 1
    var d1Date = document.querySelector(".date1");
    var d1Icon = document.querySelector(".icon1");
    var d1Temp = document.querySelector(".temp1");
    var d1Wind = document.querySelector(".wind1");
    var d1Humidity = document.querySelector(".humidity1");
    var date1 = data.list[3].dt_txt;
    var icon1 = data.list[3].weather[0].icon;
    var temp1 = data.list[3].main.temp;
    var speed1 = data.list[3].wind.speed;
    var humidity1 = data.list[3].main.humidity;
    d1Date.innerText = `${date1}`;
    d1Icon.src = `https://openweathermap.org/img/wn/${icon1}.png`;
    d1Temp.innerText = `${temp1}°F`;
    d1Wind.innerText = `Wind: ${speed1}mph`;
    d1Humidity.innerText = `Humidity: ${humidity1}%`;   
  
    // Forecast Day 2
    var d2Date = document.querySelector(".date2");
    var d2Icon = document.querySelector(".icon2");
    var d2Temp = document.querySelector(".temp2");
    var d2Wind = document.querySelector(".wind2");
    var d2Humidity = document.querySelector(".humidity2");
    var date2 = data.list[11].dt_txt;
    var icon2 = data.list[11].weather[0].icon;
    var temp2 = data.list[11].main.temp;
    var speed2 = data.list[11].wind.speed;
    var humidity2 = data.list[11].main.humidity;
    d2Date.innerText = `${date2}`;
    d2Icon.src = `https://openweathermap.org/img/wn/${icon2}.png`;
    d2Temp.innerText = `${temp2}°F`;
    d2Wind.innerText = `Wind: ${speed2}mph`;
    d2Humidity.innerText = `Humidity: ${humidity2}%`;   
  
    // Forecast Day 3
    var d3Date = document.querySelector(".date3");
    var d3Icon = document.querySelector(".icon3");
    var d3Temp = document.querySelector(".temp3");
    var d3Wind = document.querySelector(".wind3");
    var d3Humidity = document.querySelector(".humidity3");
    var date3 = data.list[19].dt_txt;
    var icon3 = data.list[19].weather[0].icon;
    var temp3 = data.list[19].main.temp;
    var speed3 = data.list[19].wind.speed;
    var humidity3 = data.list[19].main.humidity;
    d3Date.innerText = `${date3}`;
    d3Icon.src = `https://openweathermap.org/img/wn/${icon3}.png`;
    d3Temp.innerText = `${temp3}°F`;
    d3Wind.innerText = `Wind: ${speed3}mph`;
    d3Humidity.innerText = `Humidity: ${humidity3}%`;   
  
    // Forecast Day 4
    var d4Date = document.querySelector(".date4");
    var d4Icon = document.querySelector(".icon4");
    var d4Temp = document.querySelector(".temp4");
    var d4Wind = document.querySelector(".wind4");
    var d4Humidity = document.querySelector(".humidity4");
    var date4 = data.list[27].dt_txt;
    var icon4 = data.list[27].weather[0].icon;
    var temp4 = data.list[27].main.temp;
    var speed4 = data.list[27].wind.speed;
    var humidity4 = data.list[27].main.humidity;
    d4Date.innerText = `${date4}`;
    d4Icon.src = `https://openweathermap.org/img/wn/${icon4}.png`;
    d4Temp.innerText = `${temp4}°F`;
    d4Wind.innerText = `Wind: ${speed4}mph`;
    d4Humidity.innerText = `Humidity: ${humidity4}%`;  
  
    // Forecast Day 5
    var d5Date = document.querySelector(".date5");
    var d5Icon = document.querySelector(".icon5");
    var d5Temp = document.querySelector(".temp5");
    var d5Wind = document.querySelector(".wind5");
    var d5Humidity = document.querySelector(".humidity5");
    var date5 = data.list[35].dt_txt;
    var icon5 = data.list[35].weather[0].icon;
    var temp5 = data.list[35].main.temp;
    var speed5 = data.list[35].wind.speed;
    var humidity5 = data.list[35].main.humidity;
    d5Date.innerText = `${date5}`;
    d5Icon.src = `https://openweathermap.org/img/wn/${icon5}.png`;
    d5Temp.innerText = `${temp5}°F`;
    d5Wind.innerText = `Wind: ${speed5}mph`;
    d5Humidity.innerText = `Humidity: ${humidity5}%`;
}

// Fetch City Data From Search History Buttons
// function loadHistoryCity() {}

// Search Bar & Search Button Queries
var searchButton = document.querySelector(".searchbar-container button");
var searchInput = document.querySelector(".searchbar-input");

// Add Event Listeners For Searching On Search Button Click Or Enter Key
searchButton.addEventListener("click", function () {
    userInput();
});
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        userInput();
    }
});