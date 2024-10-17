async function getWeather() {
  const apiKey = "f456727fb2f4b0d0d47b621e2ac3e916";
}
const city = document.getElementById("cityInput").value;

if (city === "") {
  alert("Please enter a city name");
  return;
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try {
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    displayWeather(data);
  } else {
    alert("City is not found, please try again");
  }
} catch (error) {
  console.error("Error fetching data:", error);
  alert("There was an error fetching the weather data");
}

function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");

  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherDiv.innerHTML = `
    <h2>Weather in ${cityName}</h2>
    <p><strong>Temperature:</strong> ${temperature}</p>
    <p><strong>Condition:</strong> ${description}</p>
    <p><strong>Humidity:</strong> ${humidity}</p>
    <p><strong>Wind Speed:</strong> ${windSpeed}</p>
  `;
}

console.log("javascript loaded");
