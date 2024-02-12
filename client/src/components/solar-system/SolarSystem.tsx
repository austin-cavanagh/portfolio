import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';
// import Sun from './Sun';
import Planet from './Planet';
import { planets } from '../../data/planets';
import CameraController from './CameraController';
import { PlanetProvider } from '../../context/PlanetContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-750, 1000, 1500];
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  return (
    <PlanetProvider>
      <div className="h-screen w-screen">
        <Canvas
          camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.15} />

            <pointLight
              position={[0, 0, 0]}
              intensity={2}
              distance={0} // This effectively makes the light not diminish with distance.
              decay={0} // Setting decay to 0 to prevent intensity reduction.
            />

            <Skybox />

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
