import { useState, useEffect, useRef } from 'react';

type ImagesCarouselProps = {
  images: string[];
};

function ImagesCarousel({ images }: ImagesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const extendedImages = [...images, images[0]];

  const handleIndicatorClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);

    // If it's the last image, reset to first image after transition
    if (index === images.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Duration of transition
    }
  };

  useEffect(() => {
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
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const transformPercentage = -(currentIndex * 100);
  const activeIndicatorIndex = currentIndex % images.length;

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
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
      <div className="absolute bottom-0 flex w-full justify-center p-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`mx-1 h-3 w-3 cursor-pointer rounded-full ${activeIndicatorIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImagesCarousel;
