import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function maxTemp(){
        let temp = Math.round(props.data.temp.max);
        return `${temp}°C`;
    }

    function minTemp(){
        let temp = Math.round(props.data.temp.min);
        return `${temp}°C`;
    }

    function date(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (<div>
        <div className="WeatherForecast-day">
            {date()}
        </div>
        < WeatherIcon code={props.data.weather[0].icon} size={42} />
        <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">
                {maxTemp()}
            </span>
            <span className="WeatherForecast-temp-min">
                {minTemp()}
            </span>
        </div>
    </div>
);
}