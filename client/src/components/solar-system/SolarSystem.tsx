import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneContents from './SceneContents';

import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-750, 1000, 1500];

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
      >
        <Suspense fallback={null}>
          <Skybox />
          <SceneContents />
        </Suspense>
      </Canvas>
      <UserInterface />
    </div>
  );
}

export default SolarSystem;
