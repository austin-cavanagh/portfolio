import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

function PlanetTitle() {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  const descriptions: { [key: string]: string } = {
    Earth: 'About',
    Moon: 'Project 1/3',
    Mars: 'Project 2/3',
    Jupiter: 'Project 3/3',
    Saturn: 'Contact',
  };

  return (
    <div className="flex items-center gap-5">
      <h2 className="text-lg font-bold">{currentPlanet}</h2>
      <p className="text-base">{descriptions[currentPlanet]}</p>
    </div>
  );
}

export default PlanetTitle;
