import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import SceneContents from './SceneContents';
import { Environment } from '@react-three/drei';
import {
  BackSide,
  CubeTextureLoader,
  EquirectangularReflectionMapping,
  LinearFilter,
  TextureLoader,
} from 'three';

import topSide from '../../assets/lightblue-skybox/top.png';
import bottomSide from '../../assets/lightblue-skybox/bottom.png';
import frontSide from '../../assets/lightblue-skybox/front.png';
import rightSide from '../../assets/lightblue-skybox/right.png';
import backSide from '../../assets/lightblue-skybox/back.png';
import leftSide from '../../assets/lightblue-skybox/left.png';

function Skybox() {
  const { scene } = useThree(); // Access the Three.js scene object

  useEffect(() => {
    // Load the six images for the skybox
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      rightSide,
      leftSide,
      topSide,
      bottomSide,
      frontSide,
      backSide,
    ]);

    scene.background = texture; // Set the scene background to the loaded texture
  }, [scene]); // Dependency array ensures this effect runs only when the scene object changes

  return null; // This component does not render anything itself
}

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-90, 140, 140];

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
      >
        <Suspense fallback={null}>
          <SceneContents />
          {/* <SkySphere /> */}
          <Skybox />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
