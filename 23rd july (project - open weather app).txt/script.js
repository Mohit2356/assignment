async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const apiKey = 'ec0fe18c7b8b4a0d8ca154101250508';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert(data.error.message);
      return;
    }

    document.getElementById('location').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('temp').textContent = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById('condition').textContent = `Condition: ${data.current.condition.text}`;
    document.getElementById('wind').textContent = `Wind: ${data.current.wind_kph} kph`;
    document.getElementById('aqi').textContent = `Air Quality (PM2.5): ${data.current.air_quality.pm2_5.toFixed(2)}`;

    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (error) {
    alert("Error fetching weather data.");
    console.error(error);
  }
}
