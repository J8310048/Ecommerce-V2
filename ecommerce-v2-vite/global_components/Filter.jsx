import React from 'react';

const Filter = ({ filter, setFilter, genres }) => {
  const handleGenreChange = (e) => {
    setFilter(prevFilter => ({ ...prevFilter, genre: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilter(prevFilter => ({ ...prevFilter, price: e.target.value }));
  };

  return (
    <div className='phonemin:flex justify-center gap-x-14 items-center tabletmin:flex-row'>
      <div>
        <label className='text-white'>Genre:</label>
      <select value={filter.genre} onChange={handleGenreChange}>
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      </div>
      
        <div>
          <label className='text-white'>Max Price:</label>
          <input type="number" value={filter.price} onChange={handlePriceChange} placeholder="Max Price" className='text-center'/>
        </div>
      
    </div>
  );
};

export default Filter;
