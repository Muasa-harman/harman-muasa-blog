// app/post/page.tsx
'use client'; // Ensures this component is treated as a client component

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

type DataItem = {
  title: string;
  description: string;
};

const PostPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const dataParam = searchParams.get("data"); 

    if (dataParam) {
      try {
        // Decode and parse the data parameter
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        setData(decodedData); 
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-wrap space-x-4 space-y-4"> 
      {data.length > 0 ? (
        data.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-between min-w-[200px] h-[150px] p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No data available for the selected framework.</p>
      )}
    </div>
  );
};

export default PostPage;









// 'use client';

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
        
//         const decodedData = JSON.parse(decodeURIComponent(dataParam));
//         setData(decodedData); 
//       } catch (error) {
//         console.error("Error parsing data:", error);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <div className="flex flex-wrap space-x-4 space-y-4"> 
//   {data.length > 0 ? (
//     data.map((item, index) => (
//       <div 
//         key={index} 
//         className="flex flex-col justify-between min-w-[200px] h-[150px] p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
//       >
//         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//         <p className="text-gray-300">{item.description}</p>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-400">No data available for the selected framework.</p>
//   )}
// </div>


//   );
// };

// export default PostPage;
