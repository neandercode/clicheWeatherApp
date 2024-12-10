async function getWeather() {
  // Declare API key and get city input
  const apiKey = "f456727fb2f4b0d0d47b621e2ac3e916";
  const city = document.getElementById("cityInput").value;

  // Check if city input is empty and return early if true
  if (city === "") {
    alert("Please enter a city name");
    return; // This return must be inside the function
  }

  // Build the API URL string for fetching weather data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    // Fetch the weather data from the API
    const response = await fetch(url); // Ensure 'fetch' is not before a missing semicolon or curly brace
    const data = await response.json(); // Convert the response to JSON format

    // If the response is OK, display the weather data
    if (response.ok) {
      displayWeather(data);
    } else {
      alert("City is not found, please try again");
    }
  } catch (error) {
    // Catch and display any errors that occur during the fetch
    console.error("Error fetching data:", error);
    alert("There was an error fetching the weather data");
  }
}

function displayWeather(data) {
  // Select the div where the weather info will be displayed
  const weatherDiv = document.getElementById("weather");

  // Extract weather data from the API response
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  // Display the weather data in the weatherDiv element
  weatherDiv.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p><strong>Temperature:</strong> ${temperature} °F</p>
        <p><strong>Condition:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
}
