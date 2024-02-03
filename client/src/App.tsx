import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import LightSpeed from './components/LightSpeed';
import HomePage from './containers/HomePage';
import SolarSystem from './components/solar-system/SolarSystem';

function App() {
  // const [currentScene, setCurrentScene] = useState('lightSpeed');
  // const cameraPosition: [number, number, number] =
  //   currentScene === 'lightSpeed' ? [0, 0, 0] : [0, 0, 0];

  // const handleTransition = () => {
  //   setCurrentScene('mainPage');
  // };

  const cameraPosition = [0, 0, 100]; // Example camera position

  return (
    // <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
    //   <Canvas
    //     camera={{ position: cameraPosition }}
    //     style={{
    //       backgroundColor: 'black',
    //       display: currentScene === 'lightSpeed' ? 'block' : 'none',
    //     }}
    //   >
    //     <LightSpeed onTransition={handleTransition} />
    //   </Canvas>
    //   {currentScene === 'mainPage' && <HomePage />}
    // </div>
    // <HomePage />
    <SolarSystem />
  );
}

export default App;
