import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';
import Planet from './Planet';
import { planets } from '../../data/planets';
import CameraController from './CameraController';
import { PlanetProvider } from '../../context/PlanetContext';
import LoadingScreen from './LoadingScreen';
// import Sun from './Sun';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-750, 1000, 1500];

  return (
    <PlanetProvider>
      <div className="h-screen w-screen">
        <Suspense fallback={<LoadingScreen />}>
          <Canvas
            camera={{
              fov: 45,
              position: cameraPosition,
              near: 0.1,
              far: 100000,
            }}
          >
            <ambientLight intensity={0.1} />

            <pointLight
              position={[0, 0, 0]}
              intensity={2}
              distance={0}
              decay={0}
            />

            <Skybox />

            {/* <Sun /> */}

            {planets.map((planet, index) => {
              return <Planet {...planet} key={index} />;
            })}

            <CameraController />
          </Canvas>
        </Suspense>
        <UserInterface />
      </div>
    </PlanetProvider>
  );
}

export default SolarSystem;
