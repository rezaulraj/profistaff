import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`Service ${index + 1}`}
                className="w-full h-auto object-cover cursor-move"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full hover:text-red-500"
        >
          <MdArrowBackIos />
        </button>

        <div className="text-gray-700">
          {currentIndex + 1}/{images.length}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full hover:text-red-500"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
