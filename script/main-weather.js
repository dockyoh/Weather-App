import { getData } from "./weather-app.js";

const input = document.querySelector("input");

getData("Cagayan de oro");

document.querySelector("input").addEventListener("keydown", (event) => {
  const input = document.querySelector("input");
  if (event.key === "Enter") {
    if (input.value) {
      getData(input.value);
      console.log(input.value);
      input.value = "";
    } else {
      alert("PLEASE ENTER A CITY NAME!");
    }
  }
});

document.querySelector("button").addEventListener("click", (event) => {
  if (input.value) {
    getData(input.value);
    console.log(input.value);
    input.value = "";
  } else {
    alert("PLEASE ENTER A CITY NAME!");
  }
});
