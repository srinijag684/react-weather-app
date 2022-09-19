import {React, useState} from "react"
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready : false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response)
    {
        setWeatherData({
            ready: true,
            coord: response.data.coord,
            Temp: response.data.main.temp,
            City: response.data.name,
            Wind: response.data.wind.speed,
            Hum: response.data.main.humidity,
            Des: response.data.weather[0].description,
            Date: new Date(response.data.dt * 1000),
            Icon: response.data.weather[0].icon,
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
        const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
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
                 value="Search 🔎 "
                 className="citySearch" 
                 />
    
              </form>
              <WeatherInfo data={weatherData}/>
              <WeatherForecast coord={weatherData.coord}/>
            </div>
            
        );
    }
    
    else
    {
        search();
        //return "loading";
    }

    

    
}