import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <footer>
          this project was coded by{" "}
          <a href="https://www.linkedin.com/in/sarabonyadian/"> Sara Boni</a>{" "}
          and is{" "}
          <a href="https://github.com/Sara-Bonyadian/weather-app-react.git">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
