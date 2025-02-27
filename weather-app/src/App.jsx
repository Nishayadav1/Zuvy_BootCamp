import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "96ab59e2905cce575b3bce2ead24e216"; 

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchCities = async () => {
      try {
        const res = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${debouncedQuery}&limit=5&appid=${API_KEY}`
        );
        setSuggestions(res.data);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      }
    };

    fetchCities();
  }, [debouncedQuery]);

  const fetchWeather = async (cityName, lat, lon) => {
    setLoading(true);
    setError("");
    setSuggestions([]);
    setQuery(cityName); 

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const weatherData = { ...res.data, name: cityName };
      setWeather(weatherData);
    } catch (error) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Weather App 🌤️</h1>
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => fetchWeather(city.name, city.lat, city.lon)}
              >
                <strong>{city.name}</strong>, {city.country}
              </li>
            ))}
          </ul>
        )}

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-card">
            <h2>{weather.name}</h2> 
            <h3>{weather.sys.country}</h3>
            <h1>{Math.round(weather.main.temp)}°C</h1>
            <p>{weather.weather[0].description}</p>
            <div className="weather-details">
              <div>
                <p>{weather.wind.speed} km/h</p>
                <p>Wind Speed🌬</p>
              </div>
              <div>
                <p>{weather.main.humidity}%</p>
                <p>Humidity💧</p>
              </div>
              <div>
                <p>{weather.main.pressure} hPa</p>
                <p>Pressure🌡</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;