import "./index.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Weather App</h1>
        <WeatherSearch />
      </div>
      <footer>
        This project was coded by <a href="">Sara Boni</a> and is{" "}
        <a href="">open-sourced on GitHub</a>
      </footer>
    </div>
  );
}
