"use client";
import React, { useState, useEffect, useRef } from "react";
import { carouselType } from "./crouselType";
import { imageSliderC, CAROUSELTIMER } from "./carouselConstant";
const INTERACTION_DELAY = 3000; // 3 seconds after user click to resume auto-slide

const CarouselPage = () => {
  //   const [imageSlider, setImageSlider] = useState<carouselType[]>(imageSliderC);
  const imageSlider = imageSliderC;
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState<boolean>(false);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timerId: any;
    // console.log("isAutoSlidePaused", isAutoSlidePaused);
    if (!isAutoSlidePaused) {
      timerId = setInterval(() => {
        // console.log("isAutoSlidePaused_3", isAutoSlidePaused);

        handleNext();
      }, CAROUSELTIMER);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isAutoSlidePaused]);

  const resetAutoSlideWithDelay = () => {
    setIsAutoSlidePaused(true); // pause auto-slide
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
    interactionTimeout.current = setTimeout(() => {
      setIsAutoSlidePaused(false); // resume after delay
    }, INTERACTION_DELAY);
  };

  const handleNext = () => {
    setActiveImage((prevI) => {
      const imageSliderLength = imageSlider.length - 1;
      // console.log("debug ", {
      //   activeImage,
      //   prevI,
      //   imageSliderLength,
      // });
      if (prevI < imageSliderLength) {
        return prevI + 1;
      }
      return 0;
    });
    resetAutoSlideWithDelay(); // reset auto-slide delay
  };
  const handlePrev = () => {
    setActiveImage((prevI) => {
      if (prevI == 0) {
        return imageSlider.length - 1;
      }
      return prevI - 1;
    });
    resetAutoSlideWithDelay(); // reset auto-slide delay
  };

  const handleMouseEnter = () => setIsAutoSlidePaused(true);
  const handleMouseLeave = () => setIsAutoSlidePaused(false);
  return (
    <div>
      <div className="flex justify-between items-center h-[80vh] p-4">
        <div onClick={handlePrev}>Prev</div>
        {
          <>
            <img
              loading="lazy"
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              onMouseEnter={() => {
                handleMouseEnter();
              }}
              width={500}
              height={180}
              src={imageSlider[activeImage].imgUrl}
              className={`transition-opacity duration-500 ${
                isAutoSlidePaused ? "opacity-50" : "opacity-100"
              }`}
            />
          </>
        }
        <div onClick={handleNext}>Next</div>
      </div>
      <div className="flex  justify-center p-4 bg-amber-500 gap-2 mt-4">
        {imageSlider.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              idx === activeImage ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselPage;
