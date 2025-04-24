import React from 'react'
import './weather.css';

const weather = () => {
  return (
    <div className='weather'>
        <div className='top'>
            <p className='city'>Mumbai</p>
            <p className='weather-description'>Sunny</p>
        </div>
        <img alt='weather' className='weather-icon' src='icons/01d.png'/>
       
    </div>
  )
}

export default weather
