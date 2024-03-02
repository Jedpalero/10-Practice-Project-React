import { MdWaterDrop, MdVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa6";

type Data = {
  name: string;
  visibility: number;
  main: {
    humidity: number;
    temp: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

type WeatherDataProps = {
  weatherData: Data;
};

const centerItems = "flex flex-col items-center";
const borderSize = "flex border p-8 rounded-2xl shadow-xl";

let today = new Date();
let date = today.toDateString();
let hour = today.getHours();
let minutes = today.getMinutes();
let time = `${hour}:${minutes} ${hour >= 12 ? "PM" : "AM"}`;

const WeatherData = ({ weatherData }: WeatherDataProps) => {
  return (
    <>
      <h1 className={`${centerItems} text-xl font-bold`}>{weatherData.name}</h1>
      <h2 className={`mb-12 ${centerItems}`}>{time}</h2>

      <h1 className="border p-2 rounded-full absolute top-[15rem] ml-[130px] bg-slate-100">
        {date}
      </h1>
      <div className={`flex-col items-center mb-10 ${borderSize}`}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt="weather-icon"
          className="size-[12rem]"
        />
        <h1 className="text-3xl font-bold">
          {Math.round(weatherData.main.temp)}°C
        </h1>
        <p>{weatherData.weather[0].description}</p>
      </div>
      <div className={`${borderSize} gap-10`}>
        <div className={`${centerItems}`}>
          <MdWaterDrop />
          <h1>{weatherData.main.humidity}%</h1>
          <h1 className="text-xs">Humidity</h1>
        </div>
        <div className={`${centerItems}`}>
          <FaWind />
          <h1>{Math.round(weatherData.wind.speed)}km/h</h1>
          <h1 className="text-xs">Speed</h1>
        </div>
        <div className={`${centerItems}`}>
          <FaCloudscale />
          <h1>{weatherData.main.pressure}</h1>
          <h1 className="text-xs text-nowrap">Air Pressure</h1>
        </div>
        <div className={`${centerItems}`}>
          <MdVisibility />
          <h1>{Math.round(weatherData.visibility / 100) / 10}k</h1>
          <h1 className="text-xs">Visibility</h1>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
