'use client'


import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Using FiMenu and FiX from Feather Icons

const posts = [
  {
    title: "Understanding Next.js",
    slug: "understanding-nextjs",
    image: "https://via.placeholder.com/400x300",
    description: "A guide to the Next.js framework and its features.",
  },
  {
    title: "Advanced TypeScript",
    slug: "advanced-typescript",
    image: "https://via.placeholder.com/400x300",
    description: "Dive into advanced TypeScript techniques.",
  },
  {
    title: "CSS in JS with Tailwind",
    slug: "css-in-js-tailwind",
    image: "https://via.placeholder.com/400x300",
    description: "Using Tailwind CSS effectively in modern projects.",
  },
];

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility

  const image = "https://tsh.io/wp-content/uploads/2022/03/Next-logo-adj.png";

  return (
    <div className="flex relative">
      {/* Sidebar Button for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden p-4 text-white text-2xl absolute z-50 top-4 left-4" // Ensure button is on top with high z-index
      >
        {isSidebarOpen ? <FiX /> : <FiMenu />} {/* Using FiMenu for hamburger and FiX for close */}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-1/4 xl:w-1/5 w-full h-full bg-gray-800 p-4 fixed inset-0 transform ease-in-out duration-300 lg:static lg:h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`} // Set z-index to ensure it’s behind the button on small screens
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-6 ${isSidebarOpen ? "blur-sm" : ""}`}>
        {/* Header */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold">My Posts</h5>
          <div className="text-sm text-gray-500">Posts</div>
        </div>

        {/* Grid of PostCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <PostCard card={{ title: "Node.js", slug: "", image: image, description: "Multi Processing" }} />
          <PostCard card={{ title: "Javascript", slug: "", image: "", description: "Process-pool" }} />
          <PostCard card={{ title: "Vue", slug: "8", image: image, description: "Multi Threading" }} />
          <PostCard card={{ title: "React", slug: "9", image: "", description: "Generators" }} />
          <PostCard card={{ title: "Polymorphism", slug: "", image: image, description: "Lambda function" }} />
          <PostCard card={{ title: "Inheritance", slug: "", image: "", description: "Itertool" }} />
          <PostCard card={{ title: "Data structures", slug: "", image: image, description: "JSON" }} />
          <PostCard card={{ title: "Next", slug: "", image: "", description: "Decorators" }} />
          <PostCard card={{ title: "Python", slug: "", image: image, description: "Data Structures" }} />
        </div>
      </div>
    </div>
  );
};

export default Page;


// import PostCard from "@/components/PostCard";
// import Sidebar from "@/components/Sidebar";
// import React, { useState } from "react";
// import { IoMenu, IoClose } from "react-icons/io5"; // Importing the icons

// const posts = [
//   {
//     title: "Understanding Next.js",
//     slug: "understanding-nextjs",
//     image: "https://via.placeholder.com/400x300",
//     description: "A guide to the Next.js framework and its features.",
//   },
//   {
//     title: "Advanced TypeScript",
//     slug: "advanced-typescript",
//     image: "https://via.placeholder.com/400x300",
//     description: "Dive into advanced TypeScript techniques.",
//   },
//   {
//     title: "CSS in JS with Tailwind",
//     slug: "css-in-js-tailwind",
//     image: "https://via.placeholder.com/400x300",
//     description: "Using Tailwind CSS effectively in modern projects.",
//   },
// ];

// const Page = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility

//   const image = "https://tsh.io/wp-content/uploads/2022/03/Next-logo-adj.png";

//   return (
//     <div className="flex relative">
//       {/* Sidebar Button for Mobile */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="lg:hidden p-4 text-white text-2xl absolute z-50 top-4 left-4" // Ensure button is on top with high z-index
//       >
//         {isSidebarOpen ? <IoClose /> : <IoMenu />} {/* Toggling between Hamburger and Close Icon */}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`lg:w-1/4 xl:w-1/5 w-full h-full bg-gray-800 p-4 fixed inset-0 transform ease-in-out duration-300 lg:static lg:h-screen ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 z-40`} // Set z-index to ensure it’s behind the button on small screens
//       >
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 p-6 ${isSidebarOpen ? "blur-sm" : ""}`}>
//         {/* Header */}
//         <div className="mb-4">
//           <h5 className="text-lg font-semibold">My Posts</h5>
//           <div className="text-sm text-gray-500">Posts</div>
//         </div>

//         {/* Grid of PostCards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           <PostCard card={{ title: "Node.js", slug: "", image: image, description: "Multi Processing" }} />
//           <PostCard card={{ title: "Javascript", slug: "", image: "", description: "Process-pool" }} />
//           <PostCard card={{ title: "Vue", slug: "8", image: image, description: "Multi Threading" }} />
//           <PostCard card={{ title: "React", slug: "9", image: "", description: "Generators" }} />
//           <PostCard card={{ title: "Polymorphism", slug: "", image: image, description: "Lambda function" }} />
//           <PostCard card={{ title: "Inheritance", slug: "", image: "", description: "Itertool" }} />
//           <PostCard card={{ title: "Data structures", slug: "", image: image, description: "JSON" }} />
//           <PostCard card={{ title: "Next", slug: "", image: "", description: "Decorators" }} />
//           <PostCard card={{ title: "Python", slug: "", image: image, description: "Data Structures" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

