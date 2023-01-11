import React, { useState, useEffect } from 'react'
import Icons from './components/Icons';


function App() {
  const [data, setData] = useState('')
  const [location, setLocation] = useState('roma')
  const [icon, setIcon] = useState('')


  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`

  const getData = async () => {
    await fetch(URL)
      .then(response => { return response.json() })
      .then(data => {
        console.log(data)

        if (data.cod >= 400) {
          setData(false)
        } else {
          setIcon(data.weather[0].icon)
          setData(data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setLocation(e.target.value)
    }
  }
  useEffect(() => {
    getData()
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app">
      <div className="search">
        <input
          onKeyDown={handleSearch}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className="container">
        {(data) ? (
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="img">
              {data.weather ? <img className='icon' src={Icons(icon)} alt="icon-weather" /> : null}
            </div>
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>) : (
          <h1>City not found</h1>
        )}
      </div>

    </div>
  );
}

export default App;
