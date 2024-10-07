// components/ProjectCard.js

import Image from "next/image";

const ProjectCard = ({ title, image, link, target, rel = "noopener noreferrer"  }) => {
  return (
    <div className="group relative w-full border border-teal-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <a href={link} target={target} rel={rel}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-[300px] w-full object-cover group-hover:h-[200px] transition-all duration-300 ease-in-out -z-20"
        />
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
