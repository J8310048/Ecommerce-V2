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
      <label className='text-white'>Genre:</label>
      <select value={filter.genre} onChange={handleGenreChange}>
        <option value="">All</option>
        <option value="">Action & Adventure</option>
        <option value="">Comedy</option>
        <option value="">Sci-Fi & Fantasy</option>
        <option value="">Horror</option>
        <option value="">Animated</option>
        <option value="">Thriller & Mystery</option>
        <option value="">Children's & Family</option>
        <option value="">Drama</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      <label className='text-white'>Max Price:</label>
      <input type="number" value={filter.price} onChange={handlePriceChange} placeholder="Max Price" />
    </div>
  );
};

export default Filter;
