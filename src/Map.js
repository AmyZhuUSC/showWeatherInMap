import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

function Map({ isMarkerShown, onMarkerClick, latitude, longitude }) {
  const {isLoaded }=useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  
  if (!isLoaded ) return <div>LOADING...</div>

  return (
    <GoogleMap 
        mapContainerClassName="map-container"
        zoom={10}
        center={{ lat: latitude, lng: longitude }}
        onClick={(e) => onMarkerClick(e.latLng.lat(), e.latLng.lng())}
      >
        {isMarkerShown && (
          <Marker position={{ lat: latitude, lng: longitude }} />
        )}
      </GoogleMap>
  );
}

export default React.memo(Map);
