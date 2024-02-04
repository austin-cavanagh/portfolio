import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneContents from './SceneContents';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-90, 140, 140];

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 2000 }}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
