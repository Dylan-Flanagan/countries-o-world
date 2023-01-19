import React from 'react';

export default function CountryCard(country) {
  const fixCase = country.iso2.toLowerCase();
  return (
    <div className="country-card">
      <h2>{country.name}</h2>
      <h4>{country.local_name}</h4>
      <img src={`https://flagcdn.com/w320/${fixCase}.png`} />
    </div>
  );
}
