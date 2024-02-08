import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';
import { Mesh } from 'three';
import Sun from './Sun';
import Planet from './Planet';
import { planets } from '../../data/planets';
import CameraController from './CameraController';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-750, 1000, 1500];
  const [selectedPlanet, setSelectedPlanet] = useState<{
    ref: React.RefObject<Mesh> | null;
    name: string | null;
  }>({ ref: null, name: null });

  const [showContent, setShowContent] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const selectPlanet = (planetRef: React.RefObject<Mesh>, name: string) => {
    if (selectedPlanet.name === name) return;

    setSelectedPlanet({ ref: planetRef, name: name });
    setIsTransitioning(true);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{ fov: 45, position: cameraPosition, near: 0.1, far: 100000 }}
      >
        <Suspense fallback={null}>
          <Skybox />

          <ambientLight intensity={2.5} />

          <Sun />

          {planets.map((planet, index) => {
            return (
              <Planet
                {...planet}
                selectPlanet={selectPlanet}
                selectedPlanet={selectedPlanet}
                key={index}
              />
            );
          })}

          <CameraController
            selectedPlanet={selectedPlanet}
            isTransitioning={isTransitioning}
            showContent={showContent}
            endTransition={endTransition}
          />
        </Suspense>
      </Canvas>
      <UserInterface />
    </div>
  );
}

export default SolarSystem;
