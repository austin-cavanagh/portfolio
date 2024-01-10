import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import LightSpeed from './components/LightSpeed';
import StarryBackground from './components/StarryBackground';

function App() {
  const [currentScene, setCurrentScene] = useState('lightSpeed');
  const cameraPosition: [number, number, number] =
    currentScene === 'lightSpeed' ? [0, 0, 0] : [0, 0, 0]; // Example positions

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrentScene('starryBackground'); // Change scene after some time
  //   }, 5000); // Duration of the LightSpeed animation

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        camera={{ position: cameraPosition }}
        style={{ backgroundColor: 'black' }}
      >
        {currentScene === 'lightSpeed' && <LightSpeed />}
        {currentScene === 'starryBackground' && <StarryBackground />}
      </Canvas>
    </div>
  );
}

export default App;

// import LightSpeed from './components/LightSpeed';
// import { Canvas } from '@react-three/fiber';

// function App() {
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       <Canvas
//         camera={{ position: [0, 0, 0], far: 80 }}
//         style={{ backgroundColor: 'black' }}
//       >
//         {/* <Canvas style={{ backgroundColor: 'black' }}> */}
//         <LightSpeed />
//       </Canvas>
//     </div>
//   );
// }

// export default App;
