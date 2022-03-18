import './App.css';
import { React, useState } from 'react';
import axios from 'axios'
import SearchBox from './Components/SearchBox';
import WeatherApp from './Components/WeatherApp';

const api = {
  key: "afcd7da3e13c6fe7d3a466ad6a6d8cb7",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => {
          setWeather(res.data)
          console.log(res.data)
          setQuery("")
        })
        .catch(error => console.log(error))
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
        ? 'app warm'
        : 'app')
      : "app"}>
      <main>
        <SearchBox query={query} setQuery={setQuery} search={search} />
        {(typeof weather.main !== "undefined") ?
          <WeatherApp dateBuilder={dateBuilder} weather={weather} /> : ("")}

      </main>
    </div>
  );
}

export default App;
