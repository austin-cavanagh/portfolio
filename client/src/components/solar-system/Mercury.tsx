import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';
import mercuryColor from '../../assets/planets/mercury/mercury-color.jpg';

function Mercury() {
  const planetRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, mercuryColor);

  const orbitRadius = 28;
  const orbitSpeed = 1.0;
  const position: [number, number, number] = [28, 0, 0];

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      planetRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
    }
  });

  return (
    <mesh ref={planetRef} position={position}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Mercury;
