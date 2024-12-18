/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
  showButtonArrows = true,
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
        className="flex transition-transform duration-[700ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-none w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Buttons Arrows */}
      {showButtonArrows && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100/10 backdrop-blur-md hover:bg-gray-700 text-gray-50 rounded-full p-2 border border-gray-100/0 hover:border-gray-100 transition-all duration-200"
            onClick={prevSlide}
          >
            <HiChevronDoubleLeft size={22} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100/10 backdrop-blur-md hover:bg-gray-700 text-gray-50 rounded-full p-2 border border-gray-100/0 hover:border-gray-100 transition-all duration-200"
            onClick={nextSlide}
          >
            <HiChevronDoubleRight size={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {React.Children.map(children, (_, index) => (
            <button
              className={`size-3 rounded-full ${
                currentIndex === index ? "bg-gray-600" : "bg-gray-100/50"
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
