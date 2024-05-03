import React from 'react';

interface LoadingScreenProps {
  squareSize: number; // Size of each square in pixels
  gapSize: number; // Gap between squares in pixels
  backgroundColor: string;
  squareColor: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  squareSize = 15,
  gapSize = 1.5,
  backgroundColor = 'gray-100', // Default background color using Tailwind's color system
  squareColor = 'gray',
}) => {
  const containerStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
    gap: `${gapSize}px`,
    backgroundColor: `bg-${backgroundColor}`, // Tailwind utility for background color
  };

  const squareStyle = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    backgroundColor: squareColor,
  };

  // Estimate the number of squares to fill the screen
  // Assuming a viewport size to calculate the number of squares
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const numSquares =
    Math.ceil(screenWidth / squareSize) * Math.ceil(screenHeight / squareSize);

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gray-100">
      <div className="grid h-full w-full" style={containerStyle}>
        {Array.from({ length: numSquares }).map((_, index) => (
          <div key={index} style={squareStyle}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
