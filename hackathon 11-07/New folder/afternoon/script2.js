const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const weatherDisplay = document.getElementById("weatherDisplay");
const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");

const API_KEY = "https://openweathermap.org/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) return;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    temp.textContent = data.main.temp;
    humidity.textContent = data.main.humidity;

    weatherDisplay.classList.remove("hidden");
    weatherDisplay.classList.add("show");
  } catch (err) {
    alert(err.message);
    weatherDisplay.classList.remove("show");
    weatherDisplay.classList.add("hidden");
  }
});
