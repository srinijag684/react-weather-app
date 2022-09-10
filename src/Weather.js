import {React} from "react"
import "./Weather.css";

export default function Weather() {
    return(
        <div className="container">
          <div ></div>  
          <form className="searchCity" id="searchCity">
            <input
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
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
                New York
            </h1>
  
            <p>
                Friday 10:00
            </p>
  
            <p>
                Mostly Cloudy
            </p>
  
            <p>
              Wind Speed: 10Km/H
            </p>

            <p>
              Humidity: 72%
            </p>
            
            <img 
            src="./img/cloudy.png" 
            alt="mostly cloudy"
            />
  
            <div className="temp-day">
            <span className="temperature">6</span>
            <span className="unit">°C</span>
            </div>

          </div>
    );
}