import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[5]}/>
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[6]}/>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}