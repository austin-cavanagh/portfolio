import { useRef } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide } from 'three';
import saturnColor from '../../assets/planets/saturn/saturn-color.jpg';
import saturnRingColor from '../../assets/planets/saturn/saturn-ring-color.jpg';
import saturnRingPattern from '../../assets/planets/saturn/saturn-ring-pattern.gif';

function Saturn() {
  const saturnRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  const texture = useLoader(TextureLoader, saturnColor);

  const ringTexture = useLoader(TextureLoader, saturnRingColor);

  const ringPatternTexture = useLoader(TextureLoader, saturnRingPattern);

  ringTexture.rotation = Math.PI / 2;
  ringPatternTexture.rotation = Math.PI / 2;

  const orbitRadius = 0;
  const orbitSpeed = 0.25;

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
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <torusGeometry args={[3.5, 0.8, 2.0, 100]} />
        <meshBasicMaterial
          map={ringTexture}
          alphaMap={ringPatternTexture}
          side={DoubleSide}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default Saturn;
