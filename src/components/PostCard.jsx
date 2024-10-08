"use client"

import React from "react";
import Link from "next/link";

const PostCard = () => {
  // Static post data
  const post = {
    id: 1,
    title: "Data Structures and Algorithms in Python",
    imageUrl: "", 
    category: "Programming",
    url: "" 
  };

  return (
    <div className="group relative w-full border border-teal-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link href={post.url}>
      
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          href={post.url}
          className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article  here
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
