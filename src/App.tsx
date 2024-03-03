import "./style.css";
import { SyntheticEvent, useState } from "react";
import { apikey } from "./ApiKey";
import WeatherData from "./components/WeatherData";
import Loader from "./components/Loader";
import AnimatedText from "./framer/AnimatedText";
import { FaMagnifyingGlass } from "react-icons/fa6";

const imageL = require("./image/2687446_9267.png");

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
        setInput("");
        setError("");
        setIsLoading(false);
      } else {
        setError("Error fetching weather data");
        setIsLoading(false);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div
      className={`m-auto mt-10 shadow-lg border w-[30rem] bg-slate-300 rounded-md ${itemAlign}`}
    >
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          id="weather"
          className="pl-7 pr-7 p-2 outline-none rounded-lg bg-blue-300 bg-opacity-15"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter City"
          autoComplete="on"
        />
        <button
          type="submit"
          className="p-6 rounded-full bg-blue-300 relative animate-ping z-10"
        ></button>
        <FaMagnifyingGlass className="text-black absolute ml-[16.8rem] mt-4" />
      </form>
      <div>
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            {weatherData ? (
              <WeatherData weatherData={weatherData} loading={isLoading} />
            ) : (
              <div className={`${itemAlign} font-bold text-3xl`}>
                <AnimatedText
                  text="Weather App"
                  className="text-[40px] text-blue-400 drop-shadow-md"
                />
                <img
                  src={imageL}
                  alt="icon"
                  className="w-full object-cover opacity-20"
                />
              </div>
            )}
          </>
        )}
      </div>
      {error && <h1 className="text-center text-red-600">{error}</h1>}
    </div>
  );
}

export default App;
