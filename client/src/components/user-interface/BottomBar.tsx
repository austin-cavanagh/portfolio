import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';

function BottomBar() {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  // Style for left diagonal
  const diagonalCutLeft = {
    clipPath: 'polygon(0 2px, 100% 80%, 100% 100%, 0 100%)', // Adjust the last value to change the angle of the diagonal
  };

  // Style for right diagonal
  const diagonalCutRight = {
    clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0 100%)', // Adjust the last value to change the angle of the diagonal
  };

  return (
    <footer className="flex w-full items-end justify-center text-white">
      {/* Current Planet */}
      <div className="border-t-2 border-[#00bfff] bg-gray-900 p-6 text-lg text-[#00bfff]">
        {currentPlanet}
      </div>

      {/* Left Diagonal */}
      <div
        className="diagonalWithBorder h-full w-10 border-t-2 border-[#00bfff] bg-gray-900"
        style={diagonalCutLeft}
      ></div>

      {/* Middle */}
      <div className="h-1/5 flex-grow border-t-2 border-[#00bfff] bg-gray-900"></div>

      {/* Right Diagonal */}
      <div className="h-full w-10 bg-gray-900" style={diagonalCutRight}></div>

      {/* Date Time */}
      <DateTimeDisplay />
    </footer>
  );
}

export default BottomBar;
