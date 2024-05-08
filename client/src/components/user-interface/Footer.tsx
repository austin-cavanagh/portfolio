import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';
import { Switch } from '@headlessui/react';
import { useState } from 'react';

function Footer() {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  const [enabled, setEnabled] = useState(false);

  return (
    <footer className="pointer-events-auto flex w-full items-end justify-center font-medium text-white">
      {/* Current Planet */}
      <div className="flex h-[70px] items-center justify-center border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80">
        <span>{currentPlanet}</span>

        <div className="ml-6 flex items-center justify-center">
          <span className="mr-2">Display Content</span>
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-2 border-[#00bfff] bg-transparent text-[#00bfff] checked:bg-transparent focus:border-[#00bfff] focus:ring-[#00bfff]"
            />
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
