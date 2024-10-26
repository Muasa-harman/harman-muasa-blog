import Link from "next/link";

interface PostCardProps{
  card: {
    title: string,
    slug:string,
    image:string,
  };
}



const PostCard: React.FC<PostCardProps> = ()=>{
  return(
    <Link href={'/details'}>
    <div style={{backgroundImage:""}} className={`bg-cover bg-center text-white rounded-lg p-4 h-64 transition-transform hover:scale-105`}>
      <div className="flex justify-between items-start">
        <span className="text-sm">My project</span>
        <div className="flex flex-col items-end mt-2">
        <button className={`text-white px-2 py-1 rounded-full bg-custom-green`}>Update</button>
        <div className="flex mt-1">
          <h5 className="">React:</h5>
        </div>
        </div>
      </div>
      <div className="">
        <h4 className="">Description</h4>
      </div>
    </div>
    </Link>
  )
}

export default PostCard;

// "use client"

// import React from "react";
// import Link from "next/link";

// const PostCard = () => {
//   // Static post data
//   const post = {
//     id: 1,
//     title: "Data Structures and Algorithms in Python",
//     imageUrl: "", 
//     category: "Programming",
//     url: "" 
//   };

//   return (
//     <div className="group relative w-full border border-teal-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
//       <Link href={post.url}>
      
//       </Link>
//       <div className="p-3 flex flex-col gap-2">
//         <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
//         <span className="italic text-sm">{post.category}</span>
//         <Link
//           href={post.url}
//           className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
//         >
//           Read article  here
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
