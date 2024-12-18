/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideTo = (index) => {
    const lastIndex = React.Children.count(children) - 1;
    if (index < 0) index = lastIndex;
    if (index > lastIndex) index = 0;
    setCurrentIndex(index);
  };

  const nextSlide = () => slideTo(currentIndex + 1);
  const prevSlide = () => slideTo(currentIndex - 1);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-none w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full p-2"
            onClick={prevSlide}
          >
            <FaAngleLeft size={22} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full p-2"
            onClick={nextSlide}
          >
            <FaAngleRight size={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {React.Children.map(children, (_, index) => (
            <button
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => slideTo(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
