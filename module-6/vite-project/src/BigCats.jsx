import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://th.bing.com/th/id/OIP.j-ERKK10BMT4cpSI-4akxAHaE8?w=301&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://th.bing.com/th/id/OIP.4R_eeBzdVrDZGMOR2_z6_gHaEo?pid=ImgDet&rs=1'},
  { id: 3, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://th.bing.com/th/id/OIP.IGZjriRX2jGTrNDslyrZiQHaE7?w=250&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'},
  { id: 4, name: 'Lion', latinName: 'Panthera leo', image: 'https://th.bing.com/th/id/OIP.04Ju3HLtNN8hzBPrZFT7vgHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7'},
  { id: 5, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://th.bing.com/th/id/OIP.ihuBlV50Jgxqo4qyG3OXxwHaEa?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'},
]

const BigCats = () => {
  const [sorted, setSorted] = useState(false);
  const [reversed, setReversed] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [displayedCats, setDisplayedCats] = useState(initialCats);

  const handleSort = () => {
    setSorted(!sorted);
    setReversed(false);
    setDisplayedCats([...displayedCats].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleReverse = () => {
    setReversed(!reversed);
    setDisplayedCats([...displayedCats].reverse());
  };

  const handleFilter = () => {
    setFiltered(!filtered);
    if (filtered) {
      setDisplayedCats(initialCats.filter(cat => cat.latinName.includes('Panthera')));
    } else {
      setDisplayedCats(initialCats);
    }
  };

  const handleReset = () => {
    setSorted(false);
    setReversed(false);
    setFiltered(false);
    setDisplayedCats(initialCats);
  };

  const handleAddCat = newCat => {
    const updatedCats = [...displayedCats, { ...newCat, id: displayedCats.length + 1 }];
    setDisplayedCats(updatedCats);
  };

  const handleDeleteCat = id => {
    const updatedCats = displayedCats.filter(cat => cat.id !== id);
    setDisplayedCats(updatedCats);
  };

  return (
    <div>
      <h2>Big Cats</h2>
      <div>
        <button onClick={handleSort}>Sort Alphabetically</button>
        <button onClick={handleReverse}>Reverse List</button>
        <button onClick={handleFilter}>Filter Panthera Family</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul>
        {displayedCats.map(cat => (
          <li key={cat.id} className="cat-item">
            <SingleCat cat={cat} />
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
};

export default BigCats;