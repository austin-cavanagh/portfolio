import { Canvas } from '@react-three/fiber';
import LightSpeed from '../components/LightSpeed';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';

function Introduction() {
  const cameraPosition: [number, number, number] = [0, 0, 0];

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas
        camera={{ position: cameraPosition }}
        style={{
          backgroundColor: 'black',
          display: 'block',
        }}
      >
        <LightSpeed />
      </Canvas>
    </div>
  );
}

export default Introduction;
