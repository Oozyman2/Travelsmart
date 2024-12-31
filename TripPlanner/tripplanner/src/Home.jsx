import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Catalog from "./Components/Catalog";
import TravelDetail from "./Components/Traveldetails";
import "./App.css";

const Home = () => {
  const [travelData, setTravelData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/Data/travelCatalog.json")
      .then((response) => response.json())
      .then((data) => setTravelData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <Catalog data={travelData} searchTerm={searchTerm} />
      <TravelDetail />
    </div>
  );
};

export default Home;
