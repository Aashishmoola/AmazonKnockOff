import React, { useState } from "react";
import { defaultHomeBgImg } from "../data/defaultHomeBgImg";


export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? defaultHomeBgImg.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === defaultHomeBgImg.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-screen">
      <img src={defaultHomeBgImg[currentIndex]} alt="Background" className="w-full h-full object-cover" />
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#x25C0;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#x25B6;
      </button>
    </div>
  );
}

