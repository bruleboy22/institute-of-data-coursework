import React from 'react';

const Address = ({ streetName, state, country, zipCode }) => {
  return (
    <div style={{ border: '1px solid black', backgroundColor: 'white', color : 'black', padding: '10px', margin: '10px', borderRadius: '5px', fontFamily: 'cursive'}}>
        <p>Street: {streetName}</p>
        <p>State: {state}</p>
        <p>Country: {country}</p>
        <p>Zip Code: {zipCode}</p>
    </div>
  );
};

export default Address;
