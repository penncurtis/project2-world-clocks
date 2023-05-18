import React, { useState } from 'react';

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-container">
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search clocks..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    </div>
  );
}

export default Search;
