import { useState, useEffect } from 'react';
import axios from 'axios';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import Users from './Users';

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: 'Bangkok',
            appid: 'YOUR_API_KEY', // Replace with your OpenWeatherMap API key
            units: 'metric',
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {weather && (
        <div className="weather">
          <h2>Weather in Bangkok</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
      <Users />
    </>
  );
}

export default App;
