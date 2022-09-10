import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1 className = "city">
                {props.data.City}
            </h1>
    
            <div>
                <FormattedDate Date = {props.data.Date}/>
            </div>
    
            <p className="text-capitalize">
                {props.data.Des}
            </p>
    
            <p>
                Wind Speed: {props.data.Wind} Km/H
            </p>

            <p>
                Humidity: {props.data.Hum}%
            </p>
            
            <div className="row mt-3" >
                <div className="col-12">
                    <div className="d-flex justify-content-center" >
                        <div>
                            <WeatherIcon code={props.data.Icon} size={52}/>
                        </div>
            
                        <div className="temp-day">
                            <span className="temperature">{Math.round(props.data.Temp)}</span>
                            <span className="unit">°C |°F</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}