import { renderData } from "./render-weather.js";

export async function getData(city) {
  const key = "f51de6a73458a210b63e3c8bd866d77d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    renderData(data);
  } catch (error) {
    console.error(error.message);
    alert(`${city} Not found, ${error.message}`);
  }
}
