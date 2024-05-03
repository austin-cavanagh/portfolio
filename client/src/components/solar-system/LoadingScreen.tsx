import { useEffect, useState } from 'react';

import spaceBackground from '../../data/space-background.webp';

type LoadingScreenProps = {};

const LoadingScreen = ({}: LoadingScreenProps) => {
  const squareSize = 14;
  const gapSize = 1.5;
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const numSquares =
    Math.ceil(screenWidth / squareSize) * Math.ceil(screenHeight / squareSize);

  // Initialize colors for each square
  const [squareColors, setSquareColors] = useState<Array<string>>(
    Array(numSquares).fill('#0D1B2A'),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColors = squareColors.map(() =>
        // 15% chance to be a light square otherwise stay the same
        Math.random() < 0.15 ? '#22334B' : '#1B263B',
      );

      setSquareColors(newColors);
    }, 100); // Adjust interval to control blinking speed

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [squareColors]);

  return (
    <div
      className="flex h-screen w-full items-center justify-center overflow-hidden"
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
