import React from "react";
import "./weather.css";

const weather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png` }/>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Presssure</span>
            <span className="parameter-value">{data.main.pressure}</span>
          </div>
          </div>
    </div>       
    </div>
  );
};

export default weather;

