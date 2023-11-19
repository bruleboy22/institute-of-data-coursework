import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <li>
      <h3>{cat.name}</h3>
      <p>Latin Name: {cat.latinName}</p>
      <img src={cat.image} alt={cat.name} />
    </li>
  );
};

export default SingleCat;
