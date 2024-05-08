import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';

function Footer() {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  return (
    <footer className="pointer-events-auto flex w-full items-end justify-center font-medium text-white">
      {/* Current Planet & Display Content Checkbox */}
      <div className="flex h-[70px] items-center justify-center border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80">
        <span>{currentPlanet}</span>

        <div className="ml-6 flex items-center justify-center">
          <span className="mr-2">Hide Content</span>
          <div className="relative">
            <input
              id="comments"
              type="checkbox"
              className="hidden"
              checked={!showContent}
            />
            <label
              htmlFor="comments"
              className="block h-4 w-4 cursor-pointer rounded border border-[#00bfff] bg-transparent focus-within:border-[#00bfff]"
            >
              <svg
                className="hidden h-full w-full fill-current text-[#00bfff]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#00bfff"
                stroke-width="1"
              >
                <path d="M7.629 14.571L4.357 11.3a1 1 0 011.414-1.414L7.9 12.043l5.95-5.95a1 1 0 111.414 1.414l-6.667 6.667a1 1 0 01-1.414 0z" />
              </svg>
            </label>
          </div>
        </div>
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
