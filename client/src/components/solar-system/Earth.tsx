import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import sunColor from '../../assets/planets/sun/sun-color.jpg';
import { useRef } from 'react';

function Earth() {
  const sunRef = useRef<Mesh>(null!);
  const sunTexture = useLoader(TextureLoader, sunColor);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
}

export default Earth;
