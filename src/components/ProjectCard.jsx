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


