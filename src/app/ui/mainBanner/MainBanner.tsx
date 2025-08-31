'use client'


import Image from "next/image";
import { useState } from "react";
import { projects } from "../../lib/placeholderData";
import styles from './MainBanner.module.scss';


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
    <div className={styles.mainBannerWrapper}>
      <Image
        src={project.image}
        alt={project.name}
        width={1440}
        height={646}
        unoptimized
        onError={(e) => console.error("Image load error:", e)}
        className={styles.BannerImage}
      />
      <div className={styles.bannerContent}>
        <p>Feature Projects</p>
        <p>{project.name}</p>
        <div className={styles.buttonWrapper}>
          <button onClick={handleBack} className={styles.button}>Back</button>
          <button onClick={handleNext} className={styles.button}>Next</button>
        </div>
      </div>
    </div>
  );
}