import React, { useEffect, useState } from 'react';

// import spaceBackground from '../../data/milky-way-starry-sky-night-sky-star-956981.jpeg';
// import spaceBackground from '../../data/space-background-2.jpeg';
// import spaceBackground from '../../data/pexels-krisof-1252890.jpg';
import spaceBackground from '../../data/dark-background.jpeg';
// import spaceBackground from '../../data/blue.jpeg';

interface LoadingScreenProps {
  squareSize?: number;
  gapSize?: number;
  backgroundColor?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  squareSize = 15,
  gapSize = 1.5,
  backgroundColor = '#020c1b',
}) => {
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
        color => (Math.random() < 0.15 ? '#22334B' : '#1B263B'), // 10% chance to turn a square white, otherwise dark blue
      );
      setSquareColors(newColors);
    }, 100); // Adjust interval for faster or slower blinking

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [squareColors]);

  //   const containerStyle = {
  //     gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
  //     gap: `${gapSize}px`,
  //     backgroundColor: backgroundColor,
  //   };

  const containerStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
    gap: `${gapSize}px`,
    backgroundImage: `url(${spaceBackground})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="grid h-full w-full" style={containerStyle}>
        {squareColors.map((color, index) => (
          <div
            key={index}
            className="opacity-60"
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
