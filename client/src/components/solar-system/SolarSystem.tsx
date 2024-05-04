import { Canvas } from '@react-three/fiber';
import UserInterface from '../../containers/UserInterface';
import Skybox from './SkyBox';
import Planet from './Planet';
import { planets } from '../../data/planets';
import CameraController from './CameraController';
import { PlanetProvider } from '../../context/PlanetContext';
import Sun from './Sun';

function SolarSystem() {
  const cameraPosition: [number, number, number] = [-350, 400, 600];

  return (
    <PlanetProvider>
      <div className="h-screen w-screen">
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

          <Sun />

          {planets.map((planet, index) => {
            return <Planet {...planet} key={index} />;
          })}

          <CameraController />
        </Canvas>
        <UserInterface />
      </div>
    </PlanetProvider>
  );
}

export default SolarSystem;
