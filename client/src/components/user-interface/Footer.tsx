import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';

function Footer() {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  return (
    <footer className="flex w-full items-end justify-center text-white">
      {/* Current Planet */}
      <div className="border-t-2 border-[#00bfff] bg-gray-900 p-6 text-lg text-[#00bfff]">
        {currentPlanet}
      </div>

      {/* Left Diagonal */}
      <div className="relative h-full w-10 bg-transparent">
        {/* Blue background that appears as diagonal */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundColor: '#00bfff',
            clipPath: 'polygon(0 0, 100% 83%, 100% 100%, 0 100%)',
          }}
        ></div>

        {/* Gray background that appears on top of the blue element above */}
        <div
          className="absolute left-0 top-0 h-full w-full border-l-2 border-gray-900 bg-gray-900"
          style={{
            clipPath: 'polygon(0 2.5px, 100% 86%, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>

      {/* Middle */}
      <div className="h-1/6 flex-grow border-t-2 border-[#00bfff] bg-gray-900"></div>

      {/* Right Diagonal */}
      <div className="relative h-full w-10 bg-transparent">
        {/* Blue background that appears as diagonal */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundColor: '#00bfff',
            clipPath: 'polygon(0 83%, 100% 0, 100% 100%, 0 100%)',
          }}
        ></div>

        {/* Gray background that appears on top of the blue element above */}
        <div
          className="absolute left-0 top-0 h-full w-full border-r-2 border-gray-900 bg-gray-900"
          style={{
            clipPath: 'polygon(0 86%, 100% 2.5px, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>

      {/* Date Time */}
      <DateTimeDisplay />
    </footer>
  );
}

export default Footer;
