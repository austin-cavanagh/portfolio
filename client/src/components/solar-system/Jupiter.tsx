import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useEffect, useRef } from 'react';
import jupiterColor from '../../assets/planets/jupiter/jupiter-color-4k.jpg';

function Jupiter() {
  const jupiterRef = useRef<Mesh>(null!);
  const sunTexture = useLoader(TextureLoader, jupiterColor);

  useEffect(() => {
    if (jupiterRef.current) {
      jupiterRef.current.scale.y = 0.94;
    }
  }, []);

  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshStandardMaterial map={sunTexture} />
    </mesh>
  );
}

export default Jupiter;
