import React from 'react';

const SearchResults = ({ results }) => {
    Object.values(results);
  if (!results || results.length === 0) {
    return <div>No search results found.</div>;
  }
  const limitedResults = results.slice(0, 5);
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {limitedResults.map((result, index) => (
          <li key={index}>
            <p>{result.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
