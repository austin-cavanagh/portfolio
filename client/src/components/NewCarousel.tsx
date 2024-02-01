import React, { useState, useRef, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Adjust scroll position to center the image
    if (carouselRef.current) {
      const scrollLeft = (currentIndex - 1) * carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft = scrollLeft;
    }
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="carousel-container" ref={carouselRef}>
      <button onClick={handlePrevClick}>Prev</button>
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
