import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherSearch() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="mostly cloudy"
          />{" "}
          6 C
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 91%</li>
            <li>Wind: 24 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
