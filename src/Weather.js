import {React, useState} from "react"
import axios from "axios";
import "./Weather.css";
import FormattedDate from './FormattedDate'

export default function Weather() {
    //const [ready,setReady]=useState(false);
    //const [temperature,setTemperature]=useState(null);
    const [weatherData, setWeatherData] = useState({ready : false});

    function handleResponse(response)
    {
        console.log(response.data);
        setWeatherData({
            ready: true,
            Temp: response.data.main.temp,
            City: response.data.name,
            Wind: response.data.wind.speed,
            Hum: response.data.main.humidity,
            Des: response.data.weather[0].description,
            Date: new Date(response.data.dt * 1000)
        })
    }

    if(weatherData.ready)
    {
        return(
            <div className="container">
              <div ></div>  
              <form className="searchCity" id="searchCity">
                <input
                  type="text"
                  placeholder="Enter a city"
                  autoComplete="on"
                  className="cityInput"
                  id="city-input"
                />
      
                <input
                 type="submit" 
                 value="Search🔎"
                 className="citySearch" 
                 />
    
              </form>
    
                <h1 className = "city">
                    {weatherData.City}
                </h1>
      
                <p>
                    <FormattedDate Date = {weatherData.Date}/>
                </p>
      
                <p className="text-capitalize">
                    {weatherData.Des}
                </p>
      
                <p>
                  Wind Speed: {weatherData.Wind} Km/H
                </p>
    
                <p>
                  Humidity: {weatherData.Hum}%
                </p>
                
                <div className="row mt-3" >
                    <div className="col-12">
                        <div className="d-flex justify-content-center" >
                            <div>
                                <img 
                                src="./img/cloudy.png" 
                                alt="icon"
                                />
                            </div>
                
                            <div className="temp-day">
                                <span className="temperature">{Math.round(weatherData.Temp)}</span>
                                <span className="unit">°C |°F</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    else
    {
        const apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
        let city = "Singapore"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "loading";
    }

    

    
}