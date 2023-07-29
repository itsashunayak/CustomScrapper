import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    onSearch(query); // Call the callback function passed from App.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={handleInputChange}
      />
      {console.log(query)}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
