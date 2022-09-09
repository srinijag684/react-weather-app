import {React} from "react"
import "./Weather.css";

export default function Weather() {
    return(
        <div className="container">
          <form className="searchCity" id="searchCity">
            <input
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              class="cityInput"
              id="city-input"
            />
  
            <input
             type="submit" 
             value="Search🔎"
             class="citySearch" 
             />

          </form>

            <h1 className = "country" id="Country">
                New York
            </h1>
  
            <p>
                Friday 10:00
              <span id = "date"></span>
            </p>
  
            <p>
                Mostly Cloudy
              <span id="desc"></span>
            </p>
  
            <p>
              Wind Speed: 10Km/H
              <span id="wind"></span>
            </p>

            <p>
              Humidity: 72%
              <span id="humid"></span>
            </p>
  
            <h1 class="temp-day" id="temp">
                6°C
            </h1>
          </div>
    );
}