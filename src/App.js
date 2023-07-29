import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
      const response = await axios.post("http://localhost:8080/search",{query});
try{
      if (response.data) {
        setResults(response.data.results);
        console.log(response.data.results);
      } else {
        console.error('No search results found.');
      }
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  return (
    <div>
      <h1>Google Search using ScrapingBee</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
