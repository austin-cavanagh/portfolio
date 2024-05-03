import SolarSystem from './components/solar-system/SolarSystem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import LoadingScreen from './components/solar-system/LoadingScreen';
import { Suspense, useEffect } from 'react';
import { setIsLoading } from './state/appSlice';

function App() {
  // const { scene } = useSelector((state: RootState) => state.app);

  const { isLoading } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true)); // Set loading true when SolarSystem starts loading
    // Simulate a load (perhaps fetching data or heavy computations)
    setTimeout(() => {
      dispatch(setIsLoading(false)); // Set loading false when SolarSystem is ready
    }, 5000); // Simulate load time
  }, [dispatch]);

  return (
    <>
      {/* {scene === 'solar-system' && <SolarSystem />} */}

      {/* <Suspense fallback={<LoadingScreen />}>
        {!isLoading && <SolarSystem />}
      </Suspense> */}

      {isLoading && <LoadingScreen />}
      {!isLoading && <SolarSystem />}
    </>
  );
}

export default App;
