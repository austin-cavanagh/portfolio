import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide } from 'three';

import uranusColor from '../../assets/planets/uranus/uranus-color.jpg';
import uranusRingColor from '../../assets/planets/uranus/uranus-ring-color.jpg';
import uranusRingPattern from '../../assets/planets/uranus/uranus-ring-pattern.gif';

function Uranus() {
  const saturnRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  const planetColor = useLoader(TextureLoader, uranusColor);
  const ringColor = useLoader(TextureLoader, uranusRingColor);
  const ringPattern = useLoader(TextureLoader, uranusRingPattern);

  ringColor.rotation = Math.PI / 2;
  ringPattern.rotation = Math.PI / 2;

  const orbitRadius = 0;
  const orbitSpeed = 0;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (saturnRef.current) {
      saturnRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      saturnRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
      saturnRef.current.rotation.y += 0.007;
    }

    if (ringRef.current) {
      ringRef.current.position.x = saturnRef.current.position.x;
      ringRef.current.position.z = saturnRef.current.position.z;
    }
  });

  return (
    <>
      <mesh ref={saturnRef}>
        <sphereGeometry args={[2, 50, 50]} />
        <meshBasicMaterial map={planetColor} />
      </mesh>
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <torusGeometry args={[5.0, 0.3, 2.0, 100]} />
        <meshBasicMaterial
          map={ringColor}
          alphaMap={ringPattern}
          side={DoubleSide}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default Uranus;
