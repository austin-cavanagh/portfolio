import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide } from 'three';

// import saturnColor from '../../assets/planets/saturn/saturn-color.jpg';
// import saturnColor from '../../assets/planets/saturn/saturn-new.jpeg';
import saturnColor from '../../assets/planets/saturn/2k_saturn.jpg';

import saturnRingColor from '../../assets/planets/saturn/saturn-ring-color.jpg';
import saturnRingPattern from '../../assets/planets/saturn/saturn-ring-pattern.gif';
import getFresnelMat from '../../functions/getFresnelMat';

function Saturn() {
  const saturnRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
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

    if (glowRef.current) {
      glowRef.current.scale.y = 0.905;
    }
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.001;

      saturnRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      saturnRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
    }

    if (ringRef.current) {
      ringRef.current.position.x = saturnRef.current.position.x;
      ringRef.current.position.z = saturnRef.current.position.z;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: 0xfffacd, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={saturnRef}>
        <sphereGeometry args={[10, 50, 50]} />
        <meshStandardMaterial map={planetColor} />
      </mesh>
      <mesh ref={glowRef} scale={[1.005, 1.005, 1.005]} position={[0, 0, 0]}>
        <icosahedronGeometry args={[10, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <torusGeometry args={[17, 3.2, 2.0, 100]} />
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
