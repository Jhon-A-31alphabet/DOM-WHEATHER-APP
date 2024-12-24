async function fetchweather(city = "dominican republic santiago") {
  try {
    const response = await axios.get("https://api.weatherapi.com/v1/current.json", {
      params: {
        key: "56eabba0c52d4590a92232747240612",
        q: city,
        aqi: "yes"
      }
    });

    console.log(response.data);

    const traduccionesCondicion = {
      "Sunny": "Soleado",
      "Partly cloudy": "Parcialmente nublado",
      "Cloudy": "Nublado",
      "Overcast": "Cubierto",
      "Rain": "Lluvia",
      "Thunderstorm": "Tormenta eléctrica",
      "Snow": "Nieve",
      "Fog": "Niebla",
      "Clear": "Despejado",
      "Light rain": "Lluvia ligera",
      "Heavy rain": "Lluvia intensa",
      "Mist": "Neblina",
      "Moderate or heavy rain shower":"Lluvias moderadas o fuertes",
      "Patchy rain nearby":"Lluvia irregular",
      "Partly Cloudy":"Parcial mente nublado"
    };

    function traducirCondicion(englishCondition) {
      return traduccionesCondicion[englishCondition] || englishCondition; // Devuelve la traducción o el texto original si no existe
    }

    const condicionTraducida = traducirCondicion(response.data.current.condition.text);

    document.getElementById('weather_info').innerHTML = `
      <h3><strong>Ciudad:</strong> ${response.data.location.name}</h3>
      <h3><strong>Temperatura:</strong> ${response.data.current.temp_c} °C</h3>
      <h3><strong>Condición:</strong> ${condicionTraducida}</h3>
      <h3><strong>Velocidad del viento (km/h):</strong> ${response.data.current.wind_kph}</h3>
      <img src="${response.data.current.condition.icon}" alt="Icono del clima">
    `;
  } catch (error) {
    console.error("El error es:", error);
  }
}

window.fetchweather = fetchweather;
fetchweather();
