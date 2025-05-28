"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero dark:text-blue-300">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title ">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className=" hero__subtitle dark:text-blue-100">
          Renting a car? We make it effortless from start to drive.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container ">
        <div className="hero__image">
          <Image src="/image.png" alt="hero" fill className="object-contain " />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
