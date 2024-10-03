// components/ProjectCard.js

import Image from 'next/image';

const ProjectCard = ({ title, image, link, target, rel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a href={link} target={target} rel={rel}>
        <Image src={image} alt={title} width={300} height={200} className="w-full h-auto" />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 text-center">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;



// import React from 'react'
// import { Link } from 'react-router-dom'
// import Image from 'next/image';
// const ProjectCard = ({ title, image, link, target, rel }) => {
//   return (
//     <div className="group relative w-full border border-teal-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
//       <Link to={``}>
//         <img
//           src={image}
//           alt="post cover"
//           className="h-[300px] w-full object-cover group-hover:h-[200px] transition-all duration-300 -z-20"
//         />
//       </Link>
//       <div className="p-3 flex flex-col gap-2">
//         <p className="text-lg font-semibold line-clamp-2">{title}</p>
//         <span className="italic text-sm">{category}</span>
//         <Link to={link}
//          className=" group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2">
//             View Project
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ProjectCard

