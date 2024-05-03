// import SolarSystem from './components/solar-system/SolarSystem';
// import Introduction from './containers/Introduction';
// import Intro from './containers/Intro';
// import { useSelector } from 'react-redux';
// import { RootState } from './state/store';
import LoadingScreen from './components/solar-system/LoadingScreen';

function App() {
  // const { scene } = useSelector((state: RootState) => state.app);

  return (
    <>
      {/* {scene === 'light-speed' && <Introduction />}
      {scene === 'typing' && <Intro />}
      {scene === 'solar-system' && <SolarSystem />} */}

      <LoadingScreen />
    </>
  );
}

export default App;
