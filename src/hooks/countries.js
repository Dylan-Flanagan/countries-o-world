// import { useEffect } from 'react';
// import { useState } from 'react';
// import { fetchCountries } from '../services/countries.js';

// export function useCountries() {
//   const [countries, listedCountries] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetchCountries();
//         listedCountries(res);
//       } catch (error) {
//         setError('Oops -___-  We messed up');
//       }
//     };
//     fetchData();
//   }, []);
//   return { countries, error };
// }
