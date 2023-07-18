import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [toggle, setToggle] = useState(false);

  const url = `http://api.weatherapi.com/v1/current.json?key=22072ce807e541cba6d70255231107&q=${location}&aqi=yes`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((resposnse) => {
        setToggle(true);
        setData(resposnse.data);
        console.log(resposnse.data);
        console.log(toggle);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-10 ">
          Weather App
        </div>

        {toggle === true ? (
          <div className="mt-5 bg-[url('https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_Weather.jpg?h=d1cb525d&itok=lvYWh_W8')] bg-cover">
        <div className="">
          <input
            className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
            {/*  */}
            <div className="text-2xl font-semibold">
              {data.location.name},{data.location.country}{" "}
            </div>
            {/*  */}
            <div className="text-6xl font-bold">{data.current.temp_c}°c</div>
            {/*  */}
            <div className="text-xl font-bold">
              <div className="flex justify-center items-center">
                {data.current.condition.text}
                <img src={data.current.condition.icon} />
              </div>
            </div>
            {/*    */}
            <div className="text-xl font-bold"></div>
            <div className="flex flex-row justify-between px-10 py-3">
              <div className="border-2 p-5 rounded-lg">
                <div className="font-semibold text-xl"> {data.current.feelslike_c}°c</div>
                <div>feels like</div>
              </div>
              <div className="border-2 p-5 rounded-lg">
                <div className="font-semibold text-xl"> {data.current.humidity} %</div>
                <div>Humidity</div>
              </div>
              <div className="border-2 p-5 rounded-lg">
                <div className="font-semibold text-xl"> {data.current.wind_kph} KPH</div>
                <div>wind speed</div>
              </div>
            </div>
          </div>
        ) : (
          <>
          <div className="text-2xl font-semibold mt-3 mb-5">Please enter the location name</div>
          <input
            className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          /></>
        )}
      </div>
    </>
  );
};

export default Weather;
