"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ProjectCard = ({
  title,
  images,
  link,
  target,
  rel = "noopener noreferrer",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[200px] overflow-hidden rounded-lg sm:w-[430px] transition-all border border-teal-400 hover:border-2 h-[300px]">
      {/* group relative w-full border border-teal-400 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all */}
      <a href={link} target={target} rel={rel}>
        <Image
          src={images[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          // fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 430px"
          className="object-cover"
        />
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-green-800 focus:border-green-500">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
