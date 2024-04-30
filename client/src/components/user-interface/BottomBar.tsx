import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import DateTimeDisplay from './DateDisplay';

function BottomBar() {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  return (
    <footer className="flex w-full items-end justify-between text-white">
      <div className="bg-gray-900 p-6 text-lg text-[#00bfff]">
        {currentPlanet}
      </div>

      {/* <div className="bg-gray-900 p-4 text-lg text-[#00bfff]">
        {new Date().toLocaleDateString()}
      </div> */}

      <div className="h-1/4 flex-grow bg-red-500"></div>

      <DateTimeDisplay />
    </footer>
  );
}

export default BottomBar;
