import React, { useState } from "react";
import axios from "axios";

const Catalog = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    try {
      const response = await axios.get("http://localhost:3000/api/hotels", {
        params: {
          destination,
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
          adults,
        },
      });
      setHotels(response.data.hotels || []);
    } catch (err) {
      setError("Error fetching hotel data");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hotel Search</h1>
      <div>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
        <input
          type="number"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          min="1"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h2>{hotel.name}</h2>
            <p>{hotel.address}</p>
            <p>Price: {hotel.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
