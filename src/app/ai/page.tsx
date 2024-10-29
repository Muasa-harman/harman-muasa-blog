'use client';

import React, { useState } from 'react';
import { generateResults } from '@/lib/api/generateResults'; 

interface Result {
  title: string;
  description: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]); 

    const { results: fetchedResults, error: fetchError } = await generateResults(query);

    if (fetchError) {
      setError(fetchError);
    } else {
      setResults(fetchedResults);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Generate Results</h1>
      
      <form 
        onSubmit={handleSearch} 
        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          className="w-full sm:w-auto flex-grow p-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
        >
          Generate
        </button>
      </form>

      {loading && <p className="text-gray-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {results.length > 0 && (
        <ul className="mt-4 space-y-4">
          {results.map((result, index) => (
            <li 
              key={index} 
              className="border-b border-gray-300 pb-2"
            >
              <h2 className="font-semibold text-lg">{result.title}</h2>
              <p className="text-sm sm:text-base white">{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;