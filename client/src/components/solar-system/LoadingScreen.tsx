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

      <div className="loading-animation">
        <svg
          width="200px"
          height="100px"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#007BFF"
            stroke-width="2"
            d="M10,90 L50,10 L90,90 M30,55 L70,55"
            stroke-dasharray="240"
            stroke-dashoffset="240"
            id="A"
            style={{ animation: 'draw 2s ease forwards' }}
          ></path>
          <path
            fill="none"
            stroke="#007BFF"
            stroke-width="2"
            d="M110,90 C110,90 100,10 150,10 C200,10 190,90 140,90"
            stroke-dasharray="300"
            stroke-dashoffset="300"
            id="C"
            style={{ animation: 'draw 2s ease forwards' }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
