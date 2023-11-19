import { useState, useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const useBitcoinPrice = (currency) => {
  const [state, dispatch] = useReducer(reducer, initialState); 


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' }); 

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${encodeURIComponent(currency)}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

      
        dispatch({ type: 'FETCH_SUCCESS', payload: data }); 
    
      } catch (error) {
        
        dispatch({ type: 'FETCH_FAILURE', payload: error.message }); 
        
      }
    };

    fetchData();
  }, [currency]);

  return state;
};

export default useBitcoinPrice;
