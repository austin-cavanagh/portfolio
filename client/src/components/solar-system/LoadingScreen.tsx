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
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
          gap: `${gapSize}px`,
          backgroundColor: 'rgba(0, 65, 117, 0.35)',
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
    </div>
  );
};

export default LoadingScreen;
