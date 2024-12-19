'use client'

import React, { useState } from "react";
import FrameworkContent from "./Framework"; 
import { useRouter } from "next/navigation"; 

const Sidebar: React.FC = () => {
  const router = useRouter(); 
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleFrameworkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFramework(e.target.value);
  };

  const handleAIClick = () => {
    // Navigate to the AI page
    router.push("/ai");
  };

  return (
    <div className="flex flex-col justify-between h-screen w-48 text-gray-300 border-r  p-6"> {/* border-white */}
      {/* Sidebar Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">H@rtman</h1>
      </div>

      {/* AI Button */}
      <div className="mb-4">
        <h4 className="">Search with AI:</h4>
        <button
          onClick={handleAIClick}
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Go to AI page
        </button>
      </div>

      {/* Framework Selection */}
      <div className="space-y-2 top-2">
        <h4 className="text-lg font-semibold">Select Framework:</h4>
        <div className="max-w-lg rounded-lg p-4 bg-gray-800 shadow-md">
          <h2 className="text-xl font-bold mb-2">Language:</h2>
          <div className="space-y-3">
            {["Typescript", "Javascript", "React", "Next", "Python"].map((framework) => (
              <label key={framework} className="flex items-center">
                <input
                  type="radio"
                  name="framework"
                  value={framework.toLowerCase()}
                  checked={selectedFramework === framework.toLowerCase()}
                  onChange={handleFrameworkChange}
                  className="form-radio text-custom-purple"
                />
                <span className="ml-2">{framework}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Render FrameworkContent with selected framework */}
      <FrameworkContent selectedFramework={selectedFramework} />
    </div>
  );
};

export default Sidebar;



// "use client";

// import React, { useState } from "react";
// import FrameworkContent from "./Framework"; 
// import { useRouter } from "next/navigation"; 

// const Sidebar: React.FC = () => {
//   const router = useRouter(); 
//   const [selectedFramework, setSelectedFramework] = useState("");

//   const handleFrameworkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedFramework(e.target.value);
//   };

//   const handleAIClick = () => {
//     // Navigate to the AI page
//     router.push("/ai");
//   };

//   return (
//     <div className="flex flex-col justify-between h-screen w-48 text-gray-300 border-r border-white p-6">
//       {/* Sidebar Header */}
//       <div className="text-center">
//         <h1 className="text-2xl font-bold text-white">H@rtman</h1>
//       </div>

//       {/* AI Button */}
//       <div className="mb-4">
//         <h4 className="">Search with AI:</h4>
//         <button
//           onClick={handleAIClick}
//           className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//         >
//           Go to Ai page
//         </button>
//       </div>

//       {/* Framework Selection */}
//       <div className="space-y-2 top-2">
//         <h4 className="text-lg font-semibold">Select Framework:</h4>
//         <div className="max-w-lg rounded-lg p-4 bg-gray-800 shadow-md">
//           <h2 className="text-xl font-bold mb-2">Language:</h2>
//           <div className="space-y-3">
//             {["Typescript", "Javascript", "React", "Next", "Python"].map((framework) => (
//               <label key={framework} className="flex items-center">
//                 <input
//                   type="radio"
//                   name="framework"
//                   value={framework.toLowerCase()}
//                   checked={selectedFramework === framework.toLowerCase()}
//                   onChange={handleFrameworkChange}
//                   className="form-radio text-custom-purple"
//                 />
//                 <span className="ml-2">{framework}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Render FrameworkContent with selected framework */}
//       <FrameworkContent selectedFramework={selectedFramework} />
//     </div>
//   );
// };

// export default Sidebar;


