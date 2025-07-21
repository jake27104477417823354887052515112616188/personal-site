"use client";

import Image from "next/image";
import { useState } from "react";

interface ExperienceItemProps {
  company: string;
  position: string;
  description: string;
  imageSrc: string;
  hoverImageSrc: string;
  duration: string;
}

const ExperienceItem = ({ company, position, description, imageSrc, hoverImageSrc, duration }: ExperienceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow-md transition-shadow`}
      style={{
        width: "600px", // Fixed width
        height: "200px", // Fixed height
        backgroundImage: isHovered
          ? `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${hoverImageSrc})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Image */}
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${company} logo`}
          width={80}
          height={80}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Duration */}
      <span className="absolute top-4 right-4 text-sm text-gray-400">
        {duration}
      </span>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{company}</h3>
          <h4 className="text-md text-gray-300">{position}</h4>
          <p className="text-md text-gray-200 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;