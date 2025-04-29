import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './NearbyHelp.css';
import L from 'leaflet'; // For custom markers (basic)

const NearbyHelp = () => {
  const [location, setLocation] = useState(null);
  const [helpCenters, setHelpCenters] = useState([]);

  // Get current location of the user
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          // Get nearby help centers (mock data for now)
          setHelpCenters([
            { type: 'hospital', lat: position.coords.latitude + 0.01, lng: position.coords.longitude + 0.01, name: 'City Hospital' },
            { type: 'police', lat: position.coords.latitude - 0.01, lng: position.coords.longitude - 0.01, name: 'Central Police Station' },
            { type: 'shelter', lat: position.coords.latitude + 0.02, lng: position.coords.longitude - 0.02, name: 'Safe Haven Shelter' },
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  if (!location) return <div>Loading...</div>;

  return (
    <div className="nearby-help-container">
      <h2>Nearby Help Centers</h2>
      <MapContainer center={location} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {helpCenters.map((center, index) => (
          <Marker
            key={index}
            position={{ lat: center.lat, lng: center.lng }}
            icon={new L.Icon.Default()} // Use default marker without custom icon
          >
            <Popup>
              <h4>{center.name}</h4>
              <p>{center.type.charAt(0).toUpperCase() + center.type.slice(1)}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NearbyHelp;
