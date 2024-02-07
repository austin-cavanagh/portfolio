import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import SceneContents from './SceneContents';
import { CubeTextureLoader } from 'three';

import topSide from '../../assets/lightblue-skybox/top.png';
import bottomSide from '../../assets/lightblue-skybox/bottom.png';
import frontSide from '../../assets/lightblue-skybox/front.png';
import rightSide from '../../assets/lightblue-skybox/right.png';
import backSide from '../../assets/lightblue-skybox/back.png';
import leftSide from '../../assets/lightblue-skybox/left.png';

function Skybox() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      rightSide,
      leftSide,
      topSide,
      bottomSide,
      frontSide,
      backSide,
    ]);

    scene.background = texture;
  }, [scene]);

  return null;
}

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-250, 500, 500];

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
      >
        <Suspense fallback={null}>
          <SceneContents />
          <Skybox />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
