import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="flex">Posts</div>
      <h5 className="">My post</h5>

      <div className="flex flex-col p-6">
        <div className="grid grid-cols-3 gap-4">
          <PostCard
            card={{
              title: "Node.js",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Javascript",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Vue",
              slug: "8",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "React",
              slug: "9",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Polymorphism",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Inheritance",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Data structures",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Next",
              slug: "",
              image: "",
            }}
          />
          <PostCard
            card={{
              title: "Python",
              slug: "",
              image: "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
