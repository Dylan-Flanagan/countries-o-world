import React from 'react';
import { useCountries } from '../../../hooks/countries.js';
import Controls from '../../Controls/Controls.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, setContinents, filteredCountries } = useCountries();

  return (
    <main className="main">
      <Controls {...{ setContinents, countries }} />
      {filteredCountries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
