import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';
import neptuneColor from '../../assets/planets/neptune/neptune-color.jpg';

function Neptune() {
  const jupiterRef = useRef<Mesh>(null!);
  const sunTexture = useLoader(TextureLoader, neptuneColor);

  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
}

export default Neptune;
