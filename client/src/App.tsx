import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import LightSpeed from './components/LightSpeed';
import HomePage from './components/HomePage';

function App() {
  const [currentScene, setCurrentScene] = useState('lightSpeed');
  const cameraPosition: [number, number, number] =
    currentScene === 'lightSpeed' ? [0, 0, 0] : [0, 0, 0];

  const handleTransition = () => {
    setCurrentScene('mainPage');
  };

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
    //   {currentScene === 'mainPage' && (
    //     <div
    //       style={{
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         width: '100%',
    //         height: '100%',
    //       }}
    //     >
    //       <HomePage />
    //     </div>
    //   )}
    // </div>
    <HomePage />
  );
}

export default App;
