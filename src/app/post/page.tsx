'use client'
import React from "react";

type DataItem = {
  title: string;
  description: string;
};

const PostPage: React.FC = () => {
  // Static data
  const data: DataItem[] = [
    {
      title: "Introduction to TypeScript",
      description: "Learn the basics of TypeScript and how it improves your JavaScript code.",
    },
    {
      title: "Building React Applications",
      description: "A comprehensive guide to building applications using React.",
    },
    {
      title: "Next.js for Server-Side Rendering",
      description: "Understand how Next.js enables server-side rendering for React applications.",
    },
    {
      title: "Exploring Python",
      description: "Dive into Python programming and its use cases in modern development.",
    },
    {
      title: "Data Structures in JavaScript",
      description: "An overview of common data structures used in JavaScript.",
    },
    {
      title: "Mastering CSS Grid",
      description: "Learn how to create responsive layouts with CSS Grid.",
    },
  ];

  return (
    <div className="flex flex-wrap -m-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col justify-between w-full md:w-1/3 p-4">
          <div className="flex flex-col h-full p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPage;


// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// type DataItem = {
//   title: string;
//   description: string;
// };

// const PostPage: React.FC = () => {
//   const searchParams = useSearchParams();
//   const [data, setData] = useState<DataItem[]>([]);

//   useEffect(() => {
//     const dataParam = searchParams.get("data");

//     if (dataParam) {
//       try {
//         // Decode and parse the data parameter
//         const decodedData = JSON.parse(decodeURIComponent(dataParam));
//         setData(decodedData);
//       } catch (error) {
//         console.error("Error parsing data:", error);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <div className="flex flex-wrap space-x-4 space-y-4">
//       {data.length > 0 ? (
//         data.map((item, index) => (
//           <div 
//             key={index} 
//             className="flex flex-col justify-between min-w-[200px] h-[150px] p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//             <p className="text-gray-300">{item.description}</p>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-400">No data available for the selected framework.</p>
//       )}
//     </div>
//   );
// };

// export default PostPage;



