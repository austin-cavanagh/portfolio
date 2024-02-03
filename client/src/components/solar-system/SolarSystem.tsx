// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );

// const orbit = new OrbitControls(camera, renderer.domElement);

// camera.position.set(-90, 140, 140);

// orbit.update();

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// // add stars here

// const textureLoader = new THREE.TextureLoader();

// function animate() {
//   renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);

// window.addEventListener('resize', function () {
//   camera.aspect.window.innerWidth / this.window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneContents from './SceneContents';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-90, 140, 140];

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
