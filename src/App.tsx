import SolarSystem from './components/solar-system/SolarSystem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import LoadingScreen from './components/solar-system/LoadingScreen';
// import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { setIsLoading } from './state/appSlice';
import 'flowbite';

function App() {
  const { isLoading } = useSelector((state: RootState) => state.app);

  const {} = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const [readyToShow, setReadyToShow] = useState(false);

  useEffect(() => {
    dispatch(setIsLoading(true)); // Start the loading state
    // Here you would typically initialize SolarSystem or load resources
    setTimeout(() => {
      setReadyToShow(true); // Signal that resources are ready
      setTimeout(() => {
        // setLoading(false); // After a slight delay, hide the loading screen
        dispatch(setIsLoading(false));
      }, 2000); // Give some time for the user to recognize the loaded state
    }, 1000); // Simulate a loading process
  }, [dispatch]);

  return (
    <>
      {/* {scene === 'solar-system' && <SolarSystem />} */}

      {/* <Suspense fallback={<LoadingScreen />}>
        {!isLoading && <SolarSystem />}
      </Suspense> */}

      <div className="relative h-full w-full">
        {isLoading && <LoadingScreen />}
        {readyToShow && <SolarSystem />}

        {/* <Suspense fallback={<LoadingScreen />}>{<SolarSystem />}</Suspense> */}
      </div>

      {/* <SolarSystem /> */}
    </>
  );
}

export default App;
