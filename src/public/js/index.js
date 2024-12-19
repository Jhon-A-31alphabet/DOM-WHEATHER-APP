async function fetchweather(city ="dominican republic santiago") {
  try {
    const response = await axios.get("http://api.weatherapi.com/v1/current.json", {
      params: {
        key: "56eabba0c52d4590a92232747240612",
        q: city,
        aqi: "yes"
      }
    });



    console.log(response.data);
    document.getElementById('weather_info').innerHTML = `
                    <h3><strong>City:</strong> ${response.data.location.name}</h3>
                    <h3 ><strong>Temperature:</strong> ${response.data.current.temp_c} °C</h3>
                    <h3><strong>Condition:</strong> ${response.data.current.condition.text}</h3>
                    <h3><strong>Wind speed kph:   </strong>${response.data.current.wind_kph}<h3>

                    <img src="${response.data.current.condition.icon}" alt="weather icon">`


    
  } catch (error) {
    console.error("the error is :", error);
  }
}

window.fetchweather = fetchweather;
fetchweather()