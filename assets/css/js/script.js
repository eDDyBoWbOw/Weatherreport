async function getWeather() {
    const apiKey = "f5a902008a73d29c5d4d13f2d3e1026b"; 
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    if (!cityName) {
      alert('Please enter a city name');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.cod !== '404') {
        displayWeather(data);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred while fetching the weather data');
    }
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';
  
    const cityName = document.createElement('h2');
    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
  
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
  
    const description = document.createElement('p');
    description.textContent = `Description: ${data.weather[0].description}`;
  
    const icon = document.createElement('img');
    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.alt = 'Weather Icon';
  
    weatherInfo.appendChild(cityName);
    weatherInfo.appendChild(temperature);
    weatherInfo.appendChild(description);
    weatherInfo.appendChild(icon);
  }
  