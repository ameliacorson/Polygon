import React from "react"
import { GoogleMap, useLoadScript } from '@react-google-maps/api';



export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY

      });
    
      if (loadError) return 'Error loading maps';
      if (!isLoaded) return 'Loading maps';
    
      const center = {
        lat: 41.97684424816879,
        lng: -87.66850589629361
      };

      const containerStyle = {
        width: '200px',
        height: '200px',
      };


return (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      ></GoogleMap>
    </div>
    
)}