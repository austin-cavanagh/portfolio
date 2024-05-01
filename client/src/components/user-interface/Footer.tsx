import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';

function Footer() {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  return (
    <footer className="flex w-full items-end justify-center text-white">
      {/* Current Planet */}
      <div className="h-[70px] border-t-2 border-[#00bfff] bg-gray-900 p-6 text-lg text-[#00bfff] opacity-80">
        {currentPlanet}
      </div>

      {/* Left Diagonal */}
      <div className="relative h-full w-10 bg-transparent">
        {/* Blue background that appears as diagonal */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundColor: '#00bfff',
            clipPath: 'polygon(0 0, 100% 60px, 100% 62.5px, 0 2.5px)',
          }}
        ></div>

        {/* Gray background that appears on top of the blue element above */}
        <div
          className="absolute left-0 top-0 h-full w-full bg-gray-900 opacity-80"
          style={{
            clipPath: 'polygon(0 2.5px, 100% 62.5px, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>

      {/* Middle */}
      <div className="h-[10px] flex-grow border-t-2 border-[#00bfff] bg-gray-900 opacity-80"></div>

      {/* Right Diagonal */}
      <div className="relative h-full w-10 bg-transparent">
        {/* Blue background that appears as diagonal */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundColor: '#00bfff',
            clipPath: 'polygon(0 60px, 100% 0, 100% 2.5px, 0 62.5px)',
          }}
        ></div>

        {/* Gray background that appears on top of the blue element above */}
        <div
          className="absolute left-0 top-0 h-full w-full border-r-2 border-gray-900 bg-gray-900 opacity-80"
          style={{
            clipPath: 'polygon(0 62.5px, 100% 2.5px, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>

      {/* Date Time */}
      <DateTimeDisplay />
    </footer>
  );
}

export default Footer;
