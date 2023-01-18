import React from 'react';

export default function CountryCard(country) {
  return (
    <div className="country-card">
      <h2>{country.name}</h2>
      <h4>{country.local_name}</h4>
      <img />
    </div>
  );
}
