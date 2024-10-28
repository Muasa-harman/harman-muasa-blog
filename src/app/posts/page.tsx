import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import React from "react";

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

const page = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold">My post</h5>
          <div className="text-sm text-gray-500">Posts</div>
        </div>

        {/* Grid of PostCards */}
        <div className="grid grid-cols-3 gap-4">
          <PostCard card={{ title: "Node.js", slug: "", image: "" ,description:"Multi Processing"}} />
          <PostCard card={{ title: "Javascript", slug: "", image: "",description:"Process-pool" }} />
          <PostCard card={{ title: "Vue", slug: "8", image: "",description:'Multi Threading' }}/>
          <PostCard card={{ title: "React", slug: "9", image: "",description:'Generators' }} />
          <PostCard card={{ title: "Polymorphism", slug: "", image: "",description:'Lambda function' }} />
          <PostCard card={{ title: "Inheritance", slug: "", image: "",description:'Itertool' }} />
          <PostCard card={{ title: "Data structures", slug: "", image: "",description:'JSON' }} />
          <PostCard card={{ title: "Next", slug: "", image: "",description:'Decorators' }} />
          <PostCard card={{ title: "Python", slug: "", image: "",description:'Data Structures' }} />
        </div>
      </div>
    </div>
  );
};

export default page;


// import PostCard from "@/components/PostCard";
// import Sidebar from "@/components/Sidebar";
// import React from "react";

// const page = () => {
//   return (
//     <div className="">
//       <Sidebar />
//       <div className="flex">Posts</div>
//       <h5 className="">My post</h5>

//       <div className="flex flex-col p-6">
//         <div className="grid grid-cols-3 gap-4">
//           <PostCard
//             card={{
//               title: "Node.js",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Javascript",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Vue",
//               slug: "8",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "React",
//               slug: "9",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Polymorphism",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Inheritance",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Data structures",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Next",
//               slug: "",
//               image: "",
//             }}
//           />
//           <PostCard
//             card={{
//               title: "Python",
//               slug: "",
//               image: "",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
