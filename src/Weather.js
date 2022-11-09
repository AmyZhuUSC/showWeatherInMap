import React, { useEffect, useMemo, useState } from "react";

export default function Weather({ lat, lgn }) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lgn}&hourly=temperature_2m&hourly=weathercode`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setWeatherData([data]);
        }
      });
  }, [lat, lgn]);

  const weather = useMemo(() => {
    // console.log(weatherData);
    if (weatherData.length > 0) {
      let weatherCode = weatherData[0].hourly.weathercode[0];
      if ([0].includes(weatherCode)) {
        return "Clear sky";
      } else if ([1, 2, 3].includes(weatherCode)) {
        return "Partly cloudy";
      } else if ([45, 48].includes(weatherCode)) {
        return "Fog";
      } else if ([51, 53, 55].includes(weatherCode)) {
        return "Drizzle";
      } else if ([56, 57].includes(weatherCode)) {
        return "Freezing Drizzle";
      } else if ([61, 63, 65].includes(weatherCode)) {
        return "Rain";
      } else if ([66, 67].includes(weatherCode)) {
        return "Freezing Rain";
      } else if ([71, 73, 75].includes(weatherCode)) {
        return "Snow fall";
      } else if ([77].includes(weatherCode)) {
        return "Snow grains";
      } else if ([80, 81, 82].includes(weatherCode)) {
        return "Rain showers";
      } else if ([85, 86].includes(weatherCode)) {
        return "Snow showers slight and heavy";
      } else if ([95].includes(weatherCode)) {
        return "Thunderstorm";
      } else if ([96, 99].includes(weatherCode)) {
        return "Thunderstorm with slight and heavy hail";
      } else {
        return "Unknown";
      }
    }
  }, [weatherData]);

  return (
    <div>
      {weatherData.length > 0 && (
        <div className="weatherCard">
          <div>
            Current time: <b>{weatherData[0].hourly.time[0]}</b>
          </div>
          <div>
            Current temperature:{" "}
            <b>{weatherData[0].hourly.temperature_2m[0]}°C</b>
          </div>
          <div>
            Current Weather: <b>{weather}</b>
          </div>
        </div>
      )}
    </div>
  );
}
