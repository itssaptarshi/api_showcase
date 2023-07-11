import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [toggle, setToggle] = useState(false);

  const url = `http://api.weatherapi.com/v1/current.json?key=22072ce807e541cba6d70255231107&q=${location}&aqi=yes`;

  //   useEffect(()=>{

  //       searchLocation()
  //   },[])

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
      <div className="flex flex-col bg-gradient-to-r from-cyan-200 to-blue-300">
        <div className="text-3xl font-bold ">Weather App</div>

        <div className="">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        {toggle === true ? (
          <>
            {/*  */}
            <div className="text-2xl font-semibold">{data.location.name} </div>
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
              <div>
                <div> {data.current.feelslike_c}°c</div>
                <div>feels like</div>
              </div>
              <div>
                <div> {data.current.humidity} %</div>
                <div>Humidity</div>
              </div>
              <div>
                <div> {data.current.wind_kph} KPH</div>
                <div>wind speed</div>
              </div>
            </div>
          </>
        ) : (
          <>No Data</>
        )}
      </div>
    </>
  );
};

export default Weather;
