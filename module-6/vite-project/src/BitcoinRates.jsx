import React, { useState, useEffect } from 'react';
import useBitcoinPrice from './BitcoinReducer';

const currencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  //const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const { loading, error, data } = useBitcoinPrice(currency); 

 {/*} useEffect(() => {
    const fetchBitcoinPrice = async () => {
        try {
          const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${encodeURIComponent(currency)}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
      
          // Log the entire API response for inspection
          console.log('API Response:', data);
      
          if (!data || !data.bitcoin || !data.bitcoin[currency]) {
            throw new Error('Bitcoin price data is missing or invalid in the response');
          }
      
          // Access the Bitcoin price using the selected currency
          setBitcoinPrice(data.bitcoin[currency]);
        } catch (error) {
          console.error('Error fetching Bitcoin price:', error);
        }
      };
      

    fetchBitcoinPrice();

    return () => {
      // Cleanup function to cancel any ongoing requests if the component unmounts or currency changes
    };
  }, [currency]);*/} 

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {/*{bitcoinPrice !== null && (
        <p>
          Current Bitcoin price in {currency}: {bitcoinPrice}
        </p>
      )}*/}
       {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <p>
          Current Bitcoin price in {currency}: {data.bitcoin[currency.toLowerCase()]}
        </p>
      )} 
    </div>
  );
}

export default BitcoinRates;


