import React from 'react';

const Filter = ({ filter, setFilter, genres }) => {
  const handleGenreChange = (e) => {
    setFilter(prevFilter => ({ ...prevFilter, genre: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilter(prevFilter => ({ ...prevFilter, price: e.target.value }));
  };

  return (
    <div>
      <label>Genre:</label>
      <select value={filter.genre} onChange={handleGenreChange}>
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      <label>Max Price:</label>
      <input type="number" value={filter.price} onChange={handlePriceChange} placeholder="Max Price" />
    </div>
  );
};

export default Filter;
