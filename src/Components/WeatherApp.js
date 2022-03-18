import React from 'react'

function WeatherApp({ weather, dateBuilder }) {
    return (
        <>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].description}</div>
            </div>
        </>
    )
}

export default WeatherApp