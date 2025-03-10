import React, { useState } from "react";

const images = [
  "https://m.media-amazon.com/images/I/61njm70RYEL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61Hu4GhKHrL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71deWjZzFOL._SX3000_.jpg",
];

function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-screen">
      <img src={images[currentIndex]} alt="Background" className="w-full h-full object-cover" />
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

export default Body;