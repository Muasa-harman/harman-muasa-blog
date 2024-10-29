'use client'

import React from "react";
import { useRouter } from "next/navigation";

type FrameworkContentProps = {
  selectedFramework: string;
};

const FrameworkContent: React.FC<FrameworkContentProps> = ({ selectedFramework }) => {
  const router = useRouter();

  const handleFilter = () => {
    if (!selectedFramework) {
      alert("Please select a framework to filter!");
      return;
    }

    // Sample data based on selected framework
    const sampleData = [
      { title: `Intro to ${selectedFramework}`, description: `Learn the basics of ${selectedFramework}.` },
      { title: `Advanced ${selectedFramework}`, description: `Deep dive into ${selectedFramework} features.` },
    ];

    // Encode and push to the router
    const encodedData = encodeURIComponent(JSON.stringify(sampleData));
    router.push(`/post?data=${encodedData}`);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleFilter}
        className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 mb-4"
      >
        Filter
      </button>
    </div>
  );
};

export default FrameworkContent;






// import React from "react";
// import { useRouter } from "next/navigation";

// type FrameworkContentProps = {
//   selectedFramework: string;
// };

// const FrameworkContent: React.FC<FrameworkContentProps> = ({ selectedFramework }) => {
//   const router = useRouter();

//   const handleFilter = async () => {
//     if (!selectedFramework) {
//       alert("Please select a framework to filter!");
//       return;
//     }
//     const sampleData = [
//       { title: "Intro to TypeScript", description: "Learn the basics of TypeScript." },
//       { title: "Advanced TypeScript", description: "Deep dive into TypeScript features." },
//     ];

//     const encodedData = encodeURIComponent(JSON.stringify(sampleData));
//     router.push(`/post?data=${encodedData}`);
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={handleFilter}
//         className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 mb-4"
//       >
//         Filter
//       </button>
//     </div>
//   );
// };

// export default FrameworkContent;

