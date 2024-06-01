import { useEffect, useState } from 'react';
import spaceBackground from '../../assets/space-background.webp';

type LoadingScreenProps = {};

const LoadingScreen = ({}: LoadingScreenProps) => {
  const squareSize = 14;
  const gapSize = 1.5;
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const numSquares =
    Math.ceil(screenWidth / squareSize) * Math.ceil(screenHeight / squareSize);

  // Initialize colors for each square
  const [squareColors] = useState<Array<string>>(
    Array(numSquares).fill('rgba(26, 32, 44, 0.8)'),
  );

  // State to track if the image is loaded
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = spaceBackground;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  if (!isImageLoaded) {
    // Optionally render a loading spinner or placeholder
    // return <div className="loading-spinner">Loading...</div>;
    return <></>;
  }

  return (
    <div
      className="absolute inset-0 z-10 flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Squares Container */}
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
          gap: `${gapSize}px`,
          backgroundColor: 'rgba(0, 65, 117, 0.3)',
        }}
      >
        {squareColors.map((color, index) => (
          <div
            key={index}
            className="opacity-50"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>

      {/* Loading Message */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-transparent text-center">
        <div className="relative">
          <div className="animated-gradient h-1 w-full"></div>
          <h1
            className="my-2 text-3xl font-semibold"
            style={{ color: '#00bfff' }}
          >
            INITIALIZING
          </h1>
          <div className="animated-gradient h-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
