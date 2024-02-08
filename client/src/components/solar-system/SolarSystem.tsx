import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';
import Sun from './Sun';
import Planet from './Planet';
import { planets } from '../../data/planets';
import CameraController from './CameraController';
import { PlanetProvider } from '../../context/PlanetContext';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-750, 1000, 1500];

  return (
    <PlanetProvider>
      <div className="h-screen w-screen">
        <Canvas
          camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
        >
          <Suspense fallback={null}>
            <Skybox />

            <ambientLight intensity={2.5} />

            {/* <Sun /> */}

            {planets.map((planet, index) => {
              return <Planet {...planet} key={index} />;
            })}

            <CameraController />
          </Suspense>
        </Canvas>
        <UserInterface />
      </div>
    </PlanetProvider>
  );
}

export default SolarSystem;
