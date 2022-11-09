import Map from "./Map";
import Weather from "./Weather";
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [isMarkerShown, setIsMarkerShown] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (!isMarkerShown) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [isMarkerShown]);

  function onMarkerClick(lat, lng) {
    setIsMarkerShown(true);
    setLatitude(lat);
    setLongitude(lng);
  }

  return (
    <div className="App">
      <Map
          isMarkerShown={isMarkerShown}
          onMarkerClick={onMarkerClick}
          latitude={latitude}
          longitude={longitude}
        />
      <Weather lat={latitude} lgn={longitude} />
    </div>
  );
}

export default App;
