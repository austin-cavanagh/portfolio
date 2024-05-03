// import SolarSystem from './components/solar-system/SolarSystem';
import Introduction from './containers/Introduction';
import Intro from './containers/Intro';
// import { useSelector } from 'react-redux';
// import { RootState } from './state/store';
import LoadingScreen from './components/solar-system/LoadingScreen';

function App() {
  // const { scene } = useSelector((state: RootState) => state.app);

  const scene = 'typing';

  return (
    <>
      {/* {scene === 'light-speed' && <Introduction />} */}
      <div className="h-full w-full bg-black">
        {scene === 'typing' && <Intro />}
      </div>
      {/* {scene === 'solar-system' && <SolarSystem />} */}

      {/* <LoadingScreen /> */}
    </>
  );
}

export default App;
