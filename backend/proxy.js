const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const extractSearchResults = (html) => {
    const $ = cheerio.load(html);
    const searchResults = [];
  
    // Extract search result links and titles from Google search results page
    $('div.g').each((index, element) => {
        const link = $(element).find('a').attr('href');
        const title = $(element).find('h3').text();
        searchResults.push({ link, title });
      });
    console.log('Search Results:', searchResults);
    return searchResults;
  };
  

const handleSearch = async (query) => {
  try {
    console.log(query)
    const response = await axios.get(`https://app.scrapingbee.com/api/v1/?api_key=15R4TW12FFDFNQXFWRIAJWJ4FWOOZRYW48TNCICG36EKIZMSTSKU4OM53PKWZJKO7NFH0GE3MY3ON0IE&url=https://www.google.com/search?q=${encodeURIComponent(query)}&custom_google=true`);

    if (response.status === 200) {
      const searchResults = extractSearchResults(response.data);
      console.log('Extracted Search Results:', searchResults); // Log the extracted search results
      return searchResults;
    } else {
      console.error('Failed to fetch search results:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching search results:', error.message);
    return [];
  }
};

app.post('/search', async (req, res) => {
  try {
    const { query } = req.body;
    console.log('Received search query:', query);
    const searchResults = await handleSearch(query);
    res.json({ results: Object.values(searchResults) });
  } catch (error) {
    console.error('Error processing search request:', error.message);
    res.status(500).json({ error: 'Failed to process search request' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
