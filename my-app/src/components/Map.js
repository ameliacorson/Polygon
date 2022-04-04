import React from "react"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



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
        width: '100%',
        height: '300px',
      };


return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        
      ><Marker 
      position= {{
        lat: 41.97684424816879,
        lng: -87.66850589629361
      }}
      /></GoogleMap>
    </div>
    
)}