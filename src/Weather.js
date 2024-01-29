import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherSearch() {
    return(<div className="weather">
        <h1>New York</h1>
        <ul>
            <li>Wednesday 7:00</li>
            <li>Mostly cloudy</li>
        </ul>
    </div>);
}