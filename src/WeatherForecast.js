import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import  axios  from "axios";

export default function WeatherForecast(props)
{
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response)
    {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if(loaded)
    {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">

                        <div className="WeatherForecast-day">
                            Thu 
                        </div>  

                        <WeatherIcon code="01d" size={42}/>

                        <div className="WeatherForecast-temp">

                        <span className="WeatherForecast-temp-max">
                            {forecast[0]}
                        </span>

                        <span className="WeatherForecast-temp-min">
                            10°C
                        </span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
    else
    {
        const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
        let lon = props.coord.lon;
        let lat = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null; 
    } 
   
}