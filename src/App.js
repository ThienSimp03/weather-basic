import { useState, useRef } from "react";
import axios from "axios";
import Img1 from "./assets/img-1.jpg";
const App = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(undefined);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=18ee2b90bd3288c438be6887bf1ed4ed&units=imperial`;
  const refInput = useRef();
  const handleSearch = async () => {
    await axios.get(url).then(function (response) {
      // handle success
      setData(response.data);
    });
    setLocation("");
    refInput.current.focus();
  };
  return (
    <div>
      <div className="relative w-full h-screen">
        <img className="w-full h-full -z-10" src={Img1} alt="" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="flex justify-center p-5">
          <input
            ref={refInput}
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your country"
            className="px-3 py-2 rounded-3xl focus:outline-none bg-[#fff]/30 text-[#fff] border border-[1px] border-[#fff]"
          />
          <button
            onClick={handleSearch}
            className="px-3 py-2 rounded-3xl bg-[#fff]/30 ml-2 hover:bg-[#fff]/70"
          >
            Search
          </button>
        </div>
        {data != undefined && (
          <div className="max-w-[700px] m-auto flex-col justify-around flex h-[650px]">
            <div className="mx-40 text-[#fff] flex gap-40">
              <div className="flex flex-col gap-3 text-center">
                <div className="text-5xl font-semibold">{data.name}</div>
                <div className="text-6xl font-bold">
                  {Math.ceil((data.main.temp - 32) / 1.8)}℃
                </div>
              </div>
              <div className="m-auto text-3xl font-semibold">
                {data.weather[0].main}
              </div>
            </div>
            <div className="flex justify-evenly items-center bg-[#ccc]/50 py-5 rounded-xl text-[#fff]">
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">{data.name}</div>
                <div>{data.sys.country}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">
                  {Math.ceil((data.main.temp - 32) / 1.8)}℃
                </div>
                <div>Feel Like</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">{data.wind.speed}</div>
                <div>Wind Speed</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">{data.main.humidity}</div>
                <div>Humidity</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
