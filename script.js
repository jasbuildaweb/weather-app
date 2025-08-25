const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const weatherIcon = document.getElementById('weatherIcon');
const tempValue = document.getElementById('tempValue');
const tempUnit = document.getElementById('tempUnit');
const weatherDescription = document.getElementById('weatherDescription');
const cityName = document.getElementById('cityName');

let currenttTempC = null;

async function getWeather(city) {

    const apiKey = "a789e396fef571c39dd38f2801d8f889";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json();

        cityName.textContent = data.name;
        tempValue.textContent = data.main.temp.toFixed(1);
        weatherDescription.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weatherDisplay.classList.remove('hidden');

    } catch (error) {
        alert(error.message);
    }

}
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city) getWeather(city);
});