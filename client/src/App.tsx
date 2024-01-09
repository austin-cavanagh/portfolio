import LightSpeed from './components/LightSpeed';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* <Canvas camera={{ position: [0, 0, 0], far: 15 }}> */}
      <Canvas>
        <LightSpeed />
      </Canvas>
    </div>
  );
}

export default App;
