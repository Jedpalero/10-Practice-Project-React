import { SyntheticEvent, useState } from "react";
import "./style.css";
import { apikey } from "./ApiKey";

type Data = {
  name: string;
  main: {
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState<Data | null>(null);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        setInput("");
      } else {
        console.error("Error fetching weather data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 mt-10 container border mx-auto space-y-10 shadow-lg">
      <h1>WEATHER APP</h1>
      <form onSubmit={handleSubmit} className="">
        <input
          id="weather"
          className=""
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter City"
          autoComplete="on"
        />
        <button type="submit" className="border">
          Search
        </button>
      </form>
      <div>
        {weatherData && (
          <>
            <h1>{weatherData.name}</h1>
            {weatherData.main.humidity}

            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="weather-icon"
            />
            <h1>{weatherData.weather[0].description}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
