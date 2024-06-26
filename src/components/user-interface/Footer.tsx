import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import DateTimeDisplay from './DateTimeDisplay';
import { setShowContent } from '../../state/appSlice';

const contentPlanets = ['Earth', 'Saturn', 'Jupiter', 'Mars'];

function Footer() {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  const dispatch = useDispatch<AppDispatch>();

  const toggleShowContent = () => {
    dispatch(setShowContent(!showContent));
  };

  return (
    <footer className="pointer-events-auto flex w-full items-end justify-center font-medium text-white">
      {/* Current Planet & Display Content Checkbox */}
      <div className="flex h-[70px] w-full items-center justify-around space-x-4 border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80 sm:w-auto sm:justify-between">
        {/* <div className="flex h-[70px] w-full flex-row items-center justify-between border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80 sm:w-auto"> */}
        {/* <div className="flex h-[70px] w-full flex-col items-center justify-between border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80 sm:w-auto sm:flex-row"> */}
        {/* <div className="flex h-[70px] items-center justify-center border-t-2 border-[#00bfff] bg-gray-900 p-6 text-xl text-[#00bfff] opacity-80"> */}
        <span>{currentPlanet}</span>

        {contentPlanets.includes(currentPlanet) && (
          <div className="ml-6 flex items-center justify-center">
            <span className="mr-2">Display Content</span>
            <div className="relative">
              <input
                id="comments"
                type="checkbox"
                className="hidden"
                checked={showContent}
                onChange={toggleShowContent}
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
                  strokeWidth="1"
                >
                  <path d="M7.629 14.571L4.357 11.3a1 1 0 011.414-1.414L7.9 12.043l5.95-5.95a1 1 0 111.414 1.414l-6.667 6.667a1 1 0 01-1.414 0z" />
                </svg>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Hidden on Mobile */}
      <div className="hidden sm:flex sm:flex-grow sm:items-end">
        {/* Left Diagonal */}
        <div className="relative h-[70px] w-10 bg-transparent">
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
        <div className="relative h-[70px] w-10 bg-transparent">
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
      </div>
    </footer>
  );
}

export default Footer;
