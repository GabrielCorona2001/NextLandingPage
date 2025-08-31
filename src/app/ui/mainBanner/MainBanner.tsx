'use client'


import Image from "next/image";
import { useState } from "react";
import { projects } from "../../lib/placeholderData";

export default function MainBanner() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const handleBack = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <div>
      <Image
        src={project.image}
        alt={project.name}
        width={1440}
        height={646}
        unoptimized
        onError={(e) => console.error("Image load error:", e)}
      />
      <div>
        <p>Feature Projects</p>
        <p>{project.name}</p>
        <div>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}