import "./style.css";
import { SyntheticEvent, useState } from "react";
import { apikey } from "./ApiKey";
import WeatherData from "./components/WeatherData";
import Loader from "./components/Loader";

// const imageL = require("./weather/2687446_9267.png");

const itemAlign = "flex flex-col items-center p-8 space-y-10";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        setInput("");
        setError("");
        setIsLoading(false);
      } else {
        // console.error("Error fetching weather data");
        setError("Error fetching weather data");
        setIsLoading(false);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div
      className={`m-auto mt-10 shadow-lg border w-[30rem] ${itemAlign} bg-gradient-to-b from-indigo-500`}
    >
      {/* <img src={imageL} alt="icon" className="w-full object-cover opacity-20" /> */}
      <form onSubmit={handleSubmit}>
        <input
          id="weather"
          className="pl-7 pr-7 p-3 rounded-l-full outline-none"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter City"
          autoComplete="on"
        />
        <button
          type="submit"
          className="pl-7 pr-7 p-3 rounded-r-full bg-blue-700 text-white hover:bg-blue-800 transition-colors ease-in-out"
        >
          Search
        </button>
      </form>
      <div>
        {weatherData ? (
          <WeatherData weatherData={weatherData} />
        ) : (
          <div className={`${itemAlign} font-bold text-3xl`}>
            <h1>WEATHER APP</h1>
            {/* <img
              src={imageL}
              alt="icon"
              className="size-[25rem] object-cover opacity-20"
            /> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg"
              alt="icon"
              className="size-[8rem]"
            />
          </div>
        )}
        {error && (
          <>
            <h1>Something went wrong! Please try again...</h1>
          </>
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
