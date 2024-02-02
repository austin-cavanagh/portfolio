import { useState, useEffect, useRef } from 'react';

type ImagesCarouselProps = {
  images: string[];
};

function ImagesCarousel({ images }: ImagesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const extendedImages = [...images, images[0]];

  const handleIndicatorClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex(prevIndex => {
          if (prevIndex === images.length - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(0);
            }, 1000);
            return prevIndex + 1;
          }
          return prevIndex + 1;
        });
      }, 5000);
    };

    if (!isPaused) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, isPaused]);

  const transformPercentage = -(currentIndex * 100);
  const activeIndicatorIndex = currentIndex % images.length;

  return (
    <div
      className="relative w-full max-w-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex cursor-pointer ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(${transformPercentage}%)` }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={`${img}-${index}`}
            src={img}
            alt={`Project ${index}`}
            className="w-full"
          />
        ))}
      </div>
      {isPaused && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            key={isPaused ? 0 : 1}
            className="animate-grow-fade grow-and-fade h-16 w-16 opacity-80"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="black" fillOpacity="0.5" />
            <rect x="16" y="14" width="6" height="20" rx="0.5" fill="white" />
            <rect x="26" y="14" width="6" height="20" rx="0.5" fill="white" />
          </svg>
        </div>
      )}
      <div className="absolute bottom-0 flex w-full justify-center p-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`mx-1 h-3 w-3 cursor-pointer rounded-full ${activeIndicatorIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImagesCarousel;
