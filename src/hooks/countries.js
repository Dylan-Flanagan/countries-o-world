import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountries();
        setCountries(res);
      } catch (error) {
        setError('Oops -___-  We messed up');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
