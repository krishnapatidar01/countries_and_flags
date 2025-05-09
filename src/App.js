

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      <h1>Country Flags Display</h1>
      <div className="grid">
        {countries.map((country) => (
          <div key={country.name} className="card">
            <img src={country.flag} alt={`Flag of ${country.name}`} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;