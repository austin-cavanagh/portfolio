import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide } from 'three';

import saturnColor from '../../assets/planets/saturn/saturn-new.jpeg';
// import saturnColor from '../../assets/planets/saturn/saturn-color.jpg';

import saturnRingColor from '../../assets/planets/saturn/saturn-ring-color.jpg';
import saturnRingPattern from '../../assets/planets/saturn/saturn-ring-pattern.gif';

function Saturn() {
  const saturnRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  const planetColor = useLoader(TextureLoader, saturnColor);
  const ringColor = useLoader(TextureLoader, saturnRingColor);
  const ringPattern = useLoader(TextureLoader, saturnRingPattern);

  ringColor.rotation = Math.PI / 2;
  ringPattern.rotation = Math.PI / 2;

  const orbitRadius = 0;
  const orbitSpeed = 0.25;

  useEffect(() => {
    if (saturnRef.current) {
      saturnRef.current.scale.y = 0.9;
    }
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (saturnRef.current) {
      saturnRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      saturnRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
      saturnRef.current.rotation.y += 0.002;
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
        <torusGeometry args={[3.5, 0.8, 2.0, 100]} />
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

export default Saturn;
