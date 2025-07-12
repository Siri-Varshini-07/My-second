async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  try {
    
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) throw new Error("City not found");

    const { latitude, longitude, name, country } = geoData.results[0];

    
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;

  
    document.getElementById("cityName").textContent = `${name}, ${country}`;
    document.getElementById("temperature").textContent = `🌡️ Temperature: ${weather.temperature}°C`;
    document.getElementById("windspeed").textContent = `💨 Wind Speed: ${weather.windspeed} km/h`;
    document.getElementById("condition").textContent = `🧭 Weather Code: ${weather.weathercode}`;

    document.getElementById("weatherCard").style.display = "block";
  } catch (err) {
    alert("Error fetching weather data: " + err.message);
  }
}