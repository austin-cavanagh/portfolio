import React from 'react';

interface LoadingScreenProps {
  squareSize: number; // Size of each square in pixels
  gapSize: number; // Gap between squares in pixels
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  squareSize = 50,
  gapSize = 2,
}) => {
  const containerStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}px, 1fr))`,
    gap: `${gapSize}px`,
  };

  const squareStyle = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    backgroundColor: 'gray', // You can customize the color
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
