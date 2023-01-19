import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountries();
        setCountries(res);
      } catch (error) {
        setError('Oops  -___-  We messed up');
      }
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter(
    (country) => country.continent === continents || continents === 'all'
  );

  return { countries, error, setContinents, filteredCountries };
}
