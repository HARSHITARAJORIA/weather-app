import React, { useEffect, useState } from "react";
import Current from "./current-weather/Current";

const Search = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");

    const searchCity = async (city) => {
        const API_KEY = import.meta.env.VITE_API_KEY;

        if (!API_KEY) {
            console.error("API Key is missing! Check your .env file.");
            return;
        }

      
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (!data.main) {
              alert('Enter ')
                console.warn("City not found:", city);
                return;
            }
            if(data.cod!=200){
              alert("Enter a valid City");
              return;
            }

            setWeatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temp: Math.floor(data.main.temp),
                location: data.name,
                icon: data.weather[0].icon,
                condition: data.weather[0].description,
                feelslike: data.main.feels_like,
            });
        } catch (err) {
            console.error("Error fetching weather data:", err);
        }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter" && city.trim() !== "") {
          searchCity(city.trim());
      } else if (event.key === "Enter" && city.trim() === "") {
          alert("Please enter a city name");
          return;
      }
  };
  

    useEffect(() => {
        searchCity(city); // ✅ Default to Agra, India on first load
    }, []);

   

    return (
        <>
            <input
                        type="text"
                        placeholder="Search for a city..."
                        className="w-full h-10 py-2 bg-black/10 border border-white/20 rounded-md text-zinc-900 outline-none placeholder-black font-bold"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
            {weatherData && <Current weatherData={weatherData} />}
        </>
    );
};

export default Search;
