import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';

function Footer() {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  return (
    <footer className="pointer-events-auto flex w-full items-end justify-center font-medium text-white">
      {/* Current Planet */}
      <div className="h-[70px] border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80">
        <span>{currentPlanet}</span>
        {/* <button className="ml-3 rounded-lg border border-link-blue px-2 py-1 text-link-blue transition duration-300 ease-in-out hover:border-white hover:text-white">
          {showContent ? 'Hide Content' : 'Show Content'}
        </button> */}
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

      {/* Central Tab */}
      <div
        className="absolute bottom-[10px] left-1/2 h-[30px] w-[200px] -translate-x-1/2 transform bg-[#00bfff] opacity-80"
        style={{
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
        }}
      >
        <button
          onClick={() => {
            console.log('Toggle View');
          }}
          className="h-full w-full font-bold text-white"
        >
          Toggle View
        </button>
      </div>

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
