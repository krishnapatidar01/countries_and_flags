import React from "react";
import "./App.css";

function CountryCard({ name, flag }) {
  return (
    <div className="card">
      <img src={flag} alt={`Flag of ${name}`} className="flag" />
      <p className="name">{name}</p>
    </div>
  );
}

export default CountryCard;