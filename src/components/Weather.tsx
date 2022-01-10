import React, { FC } from "react";
import { WeatherData } from "../store/types/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather = ({ data }: WeatherProps) => {
  console.log("data", data);

  const fahrenheit = (data.main?.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main?.temp - 273.15).toFixed(2);

  return (
    <section>
      <div>
        <h1 style={{ marginBottom: 50 }}>
          {data.name} - {data.sys.country}
        </h1>
        <div style={{ alignItems: "flex-start" }}>
          <div>
            <div>
              <p>{data.weather[0].description}</p>
              <p>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt=""
                />
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>temp</p>
              <div>
                <p>{data.main.temp}K</p>
                <p>
                  {fahrenheit}
                  <sup>&#8457;</sup>
                </p>
                <p>
                  {celsius}
                  <sup>&#8451;</sup>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>humidity</p>
              <p>{data.main.humidity}</p>
            </div>
          </div>
          <div>
            <div>
              <p>pressure</p>
              <p>{data.main.pressure}</p>
            </div>
          </div>
          <div>
            <div>
              <p>wind</p>
              <p>{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
