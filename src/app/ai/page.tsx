'use client'

import React, { useState } from 'react';
import axios from 'axios';

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
    setResults([]); // Clear previous results

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        setError('API key is missing.');
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: query }] }],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log("API Response:", response.data);

      if (response.data && Array.isArray(response.data.candidates)) {
        const generatedContent = response.data.candidates.map((candidate: any) => ({
          title: "Generated Content",
          description: candidate.content.parts.map((part: any) => part.text).join(" "),
        }));
        setResults(generatedContent);
      } else if (response.data.error) {
        setError(`API error: ${response.data.error.message}`);
      } else {
        setError('Unexpected response format from API.');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.error("Axios error:", err.response.data);
        setError('An error occurred while fetching data.');
      } else {
        console.error("Unexpected error:", err);
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
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





// 'use client'

// import React, { useState } from 'react';
// import axios from 'axios';

// interface Result {
//   title: string;
//   description: string;
// }

// const SearchPage: React.FC = () => {
//   const [query, setQuery] = useState<string>('');
//   const [results, setResults] = useState<Result[]>([]);
//   const [error, setError] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setResults([]);
  
//     try {
//       const response = await axios.post('app/server/generateContent.ts', {
//         contents: [{ parts: [{ text: query }] }],
//       });
  
//       if (response.data && Array.isArray(response.data.candidates)) {
//         const generatedContent = response.data.candidates.map((candidate: any) => ({
//           title: "Generated Content",
//           description: candidate.content.parts.map((part: any) => part.text).join(" "),
//         }));
//         setResults(generatedContent);
//       } else if (response.data.error) {
//         setError(`API error: ${response.data.error.message}`);
//       } else {
//         setError('Unexpected response format from API.');
//       }
//     } catch (err) {
//       setError('An error occurred while fetching data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-3xl">
//       <h1 className="text-2xl font-bold mb-4 text-center">Generate AI Content</h1>
//       <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter your query"
//           className="flex-grow p-2 text-black border border-gray-300 rounded w-full sm:w-auto"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-blue-600"
//         >
//           Generate
//         </button>
//       </form>

//       {loading && <p className="text-gray-500 text-center">Loading...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {results.length > 0 && (
//         <ul className="mt-4 space-y-4">
//           {results.map((result, index) => (
//             <li key={index} className="border-b border-gray-300 py-2">
//               <h2 className="font-semibold">{result.title}</h2>
//               <p>{result.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchPage;

  
