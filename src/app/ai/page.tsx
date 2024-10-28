'use client'

// components/SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';

// Define an interface for your result item
interface Result {
  title: string;
  description: string;
  // Add other properties as needed based on your API response
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]); 
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    setLoading(true);
    setError('');
    
    try {
      // Replace with your API endpoint
      const response = await axios.get(`https://api.example.com/search`, {
        params: { q: query },
      });
      setResults(response.data); // Adjust according to your API response structure
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search API Component</h1>
      <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          className="flex-grow p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {results.length > 0 && (
        <ul className="mt-4">
          {results.map((result, index) => (
            <li key={index} className="border-b border-gray-300 py-2">
              {/* Use properties defined in the Result interface */}
              <h2 className="font-semibold">{result.title}</h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
