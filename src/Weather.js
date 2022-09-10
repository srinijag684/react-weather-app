import {React, useState} from "react"
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready : false});

    function handleResponse(response)
    {
        setWeatherData({
            ready: true,
            Temp: response.data.main.temp,
            City: response.data.name,
            Wind: response.data.wind.speed,
            Hum: response.data.main.humidity,
            Des: response.data.weather[0].description,
            Date: new Date(response.data.dt * 1000),
            Icon: response.data.weather[0].icon
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
      }
    
      function handleCityChange(event) {
        setCity(event.target.value);
      }

      function search()
      {
        const apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }

    if(weatherData.ready)
    {
        return(
            <div className="container">  
              <form className="searchCity" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city"
                  autoComplete="on"
                  className="cityInput"
                  id="city-input"
                  onChange={handleCityChange}
                />
      
                <input
                 type="submit" 
                 value="Search🔎"
                 className="citySearch" 
                 />
    
              </form>
              <WeatherInfo data={weatherData}/>
            </div>
            
        );
    }
    else
    {
        search();
        return "loading";
    }

    

    
}