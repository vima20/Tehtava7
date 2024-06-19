import React, { useState, useEffect } from 'react';

const useCountry = (countryName) => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://studies.cs.helsinki.fi/restcountries/name/${countryName}`);
        const data = await response.json();

        if (data.length === 0) {
          setError('Maata ei löydy.');
          setCountryData(null);
          return;
        }

        setCountryData(data[0]);
        setError(null);
      } catch (err) {
        setError('Virhe tiedon haussa.');
        setCountryData(null);
      }
    };

    fetchCountryData();
  }, [countryName]);

  return { countryData, error };
};

export default useCountry;
