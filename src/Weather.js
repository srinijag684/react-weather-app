import {React} from "react"
import "./Weather.css";

export default function Weather() {
    return(
        <div className="container">
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city.."
                            className="form-control"
                            autoFocus="on"
                        />
                    </div>

                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w-100"
                        />
                    </div>
                </div>
            </form>
            <div className="WeatherInfo">
                <h1>New York</h1>
                <ul>
                    <li>
                        Wednesday 7.00
                    </li>
                    <li>
                        Mostly Cloudy
                    </li>
                </ul>
            <div className="row mt-3">
                <div className="col-6">
                <div className="d-flex">
                    <div>
                        
                    </div>

                    <div>
                       <h1>6°C</h1>
                    </div>
                </div>
                </div>
                <div className="col-6">
                <ul>
                    <li>Humidity: 21%</li>
                    <li>Wind: 10km/h</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}