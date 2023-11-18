import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [newCat, setNewCat] = useState({ name: '', latinName: '', image: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewCat(prevCat => ({ ...prevCat, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newCat.name && newCat.latinName && newCat.image) {
      onAddCat(newCat);
      setNewCat({ name: '', latinName: '', image: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newCat.name} onChange={handleInputChange} />
      </label>
      <label>
        Latin Name:
        <input type="text" name="latinName" value={newCat.latinName} onChange={handleInputChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={newCat.image} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
