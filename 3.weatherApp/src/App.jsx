import { useState, useEffect } from "react";
import axios from "axios";
import { Sun, Wind, Cloud, Droplet } from "lucide-react"; // Lucide icons

function WeatherApp() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Access the environment variable
  const API_KEY = import.meta.env.VITE_WEATHER_API;

  // Fetch 5-day forecast weather data
  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Failed to fetch weather data");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  function handleSubmit(e) {
    e.preventDefault();
    setCity('')
    fetchWeatherData();
   
  }

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-green-200 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Weather App
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City..."
          className="focus:outline-none px-4 py-2 shadow-lg focus:ring-2 focus:ring-blue-500 rounded-md m-2 bg-slate-100 text-gray-500"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center">
            {weatherData.city.name}, {weatherData.city.country}
          </h2>
          <p className="text-center text-gray-600">
            {weatherData.list[0].weather[0].description}
          </p>

          {/* 5-day forecast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {weatherData.list.slice(0, 5).map((day, index) => (
              <div
                key={index}
                className="bg-slate-100 p-4 rounded-md shadow-md text-center"
              >
                <p className="text-xl font-semibold">
                  {new Date(day.dt * 1000).toLocaleDateString()}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  className="w-16 h-16 mx-auto"
                />
                <p className="text-lg">{Math.round(day.main.temp)}°C</p>
                <p className="text-gray-600">{day.weather[0].description}</p>
              </div>
            ))}
          </div>

          {/* Weather Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Sun className="text-yellow-500" />
              <p className="ml-2">
                Feels like: {Math.round(weatherData.list[0].main.feels_like)}°C
              </p>
            </div>
            <div className="flex items-center">
              <Droplet className="text-blue-500" />
              <p className="ml-2">
                Humidity: {weatherData.list[0].main.humidity}%
              </p>
            </div>
            <div className="flex items-center">
              <Wind className="text-gray-500" />
              <p className="ml-2">
                Wind Speed: {weatherData.list[0].wind.speed} m/s
              </p>
            </div>
            <div className="flex items-center">
              <Cloud className="text-gray-400" />
              <p className="ml-2">Clouds: {weatherData.list[0].clouds.all}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
