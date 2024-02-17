
const btn = document.querySelector('.icon')
const tempEl = document.getElementById('temp');
const cityEl = document.getElementById('city');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const cityInput = document.getElementById('city-input')
const apiKey = '&appid=c136b4b67011119f82fda5ae7113a0e1&units=metric';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='


function updateWeather(data) {
  document.querySelector('.loading').innerHTML = ''
  document.querySelector('.weather').style.display = 'flex';
  console.log(data);
  tempEl.innerHTML = `${(data.main.temp.toFixed(1))}&degC`;
  cityEl.innerHTML = data.name;
  humidityEl.innerHTML = `${data.main.humidity}%`;
  windSpeedEl.innerHTML = `${data.wind.speed.toFixed(1)}km/h`;
  document.querySelector('.error').style.display = 'none';

  switch (data.weather[0].main) {
    case 'Clouds':
      document.getElementById('weather-img').src = './images/clouds.png';
      break;
    case 'Clear':
      document.getElementById('weather-img').src = './images/clear.png';
      break;
    case 'Rain':
      document.getElementById('weather-img').src = './images/rain.png';
      break;
    case 'Drizzle':
      document.getElementById('weather-img').src = './images/drizzle.png';
      break;
    case 'Mist':
      document.getElementById('weather-img').src = './images/mist.png';
      break;
    case 'Snow':
      document.getElementById('weather-img').src = './images/snow.png';
      break;
    default:
      document.getElementById('weather-img').src = './images/mist.png';
  }
}

const getWeather = async () => {

  const cityName = cityInput.value.trim();
  document.querySelector('.loading').innerHTML = '<p>loading...</p>'
  if (!cityName) {
    alert('Please enter a city name');
    document.querySelector('.loading').innerHTML = ''
    document.querySelector('.weather').style.display = 'none';
    return;
  }
  const response = await fetch(url + cityName + apiKey)
  const data = await response.json()

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.querySelector('.loading').innerHTML = ''
  }
  else {
    updateWeather(data);
  }
}

btn.addEventListener('click', getWeather)


document.getElementById('city-input').addEventListener('keyup', () => {
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.loading').innerHTML = ''
})

//  **********  location  ***********

async function showPosition(position) {
  console.log(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}${apiKey}`)

  const data = await response.json()
  console.log(data);
  updateWeather(data);
}

async function getLocation() {
  document.querySelector('.loading').innerHTML = '<p>loading...</p>'
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}


document.getElementById('get-location').addEventListener('click', getLocation)



