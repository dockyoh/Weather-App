export function renderData(data) {
  const cityName = document.querySelector(".js-city-name");
  const descriptionImage = document.querySelector(".js-description-icon");
  const temp = document.querySelector(".js-temp");
  const weatherDescription = document.querySelector(".js-weather-description");
  const feelsLike = document.querySelector(".js-feels-status");
  const humidity = document.querySelector(".js-humidity-status");
  const windSpeed = document.querySelector(".js-wind-status");

  cityName.innerHTML = data.name;
  temp.innerHTML = `${Math.round(data.main.temp)}℃`;
  weatherDescription.innerHTML = data.weather[0].description;
  feelsLike.innerHTML = `Feels like: ${Math.round(data.main.feels_like)}℃`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  windSpeed.innerHTML = `Wind speed: ${Math.floor(data.wind.speed * 3.6)}km/h`;
  descriptionImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
