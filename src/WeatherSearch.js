import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      tempreture: response.data.main.temp,
      hiumidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6d68aadfacdd4f5163bc273049a0cf2d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter your City.."
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (isLoaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Tempreture: {weather.tempreture}</li>
          <li>Hiumidity: {weather.hiumidity}</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>Icon: {weather.icon}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
