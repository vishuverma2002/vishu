// components/LocationSearch/LocationSearch.js
import { useState } from "react";
import styles from "./location.module.css";

const Locations = () => {
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const handleLocationInput = (e) => {
    setLocation(e.target.value);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className={styles.locationSearch}>
        <input
          type="text"
          placeholder="Search for area, street name..."
          value={location}
          onChange={handleLocationInput}
          className={styles.input}
        />
        <button onClick={getCurrentLocation} className={styles.button}>
          Get current location
        </button>
        {currentLocation && (
          <p className={styles.result}>Current Location: {currentLocation}</p>
        )}
      </div>
    </>
  );
};

export default Locations;
