import SolarSystem from './components/solar-system/SolarSystem';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import Introduction from './containers/Introduction';
import Intro from './containers/Intro';

function App() {
  const { scene } = useSelector((state: RootState) => state.app);

  return (
    <>
      {scene === 'light-speed' && <Introduction />}
      {scene === 'typing' && <Intro />}
      {scene === 'solar-system' && <SolarSystem />}
    </>
  );
}

export default App;
