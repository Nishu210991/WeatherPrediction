import './App.css';
import Search from './components/search/search';
import Weather from './components/weather/weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import React, { useState } from "react";

function App() {

  const [currentWeather, setCurretWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);

  const handleOnSerachChange = (searchData)=>{

    const [lat , lon] = searchData.value.split(" ");
   

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeather = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastWeather])
    .then(async(response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurretWeather({city:searchData.label, ...weatherResponse});
      setForeCast({city:searchData.label, ...forecastResponse});
    })
    .catch((err)=> console.log(err))

  }
 
  return (
   <div className='container'>
   <Search onSearchChange={handleOnSerachChange}/>
 { currentWeather && <Weather data= {currentWeather} />}
 { forecast && <Forecast data={forecast} />}
   
   </div>
  );
}

export default App;
