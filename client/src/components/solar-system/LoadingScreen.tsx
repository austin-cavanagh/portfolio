import { useEffect, useState } from 'react';

import spaceBackground from '../../data/small-starts.webp';
// import spaceBackground from '../../data/hmmmmm.avif';

type LoadingScreenProps = {
  //   squareSize?: number;
  //   gapSize?: number;
  //   backgroundColor?: string;
};

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
      const newColors = squareColors.map(
        () => (Math.random() < 0.15 ? '#22334B' : '#1B263B'), // 10% chance to turn a square white, otherwise dark blue
      );
      setSquareColors(newColors);
    }, 100); // Adjust interval for faster or slower blinking

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [squareColors]);

  const containerStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
    gap: `${gapSize}px`,
    backgroundImage: `url(${spaceBackground})`,
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
  };

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
        className="grid h-full w-full opacity-80"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
          gap: `${gapSize}px`,
          backgroundColor: '#0D1B2A', // Dark blue with 75% opacity
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
