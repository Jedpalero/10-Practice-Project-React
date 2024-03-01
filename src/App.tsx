import { SyntheticEvent, useState } from "react";
import "./style.css";

const apikey = "87dbea18364eec574cf1be21b531a4cd";

type Data = {
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
        // console.log(data);
      } else {
        console.error("Error fetching weather data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoComplete="on"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {weatherData && (
          <>
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
