import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';

import mercuryColor from '../../assets/planets/mercury/mercury-color-2k.jpg';

function Mercury() {
  const orbitRadius = 0;
  const orbitSpeed = 0;
  const oblateness = 1;
  const radius = 10;
  const rotation = 0.001;
  const glowColor = 0xb3cde0;

  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, mercuryColor);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.rotation.y += rotation;

      planetRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      planetRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: glowColor,
    facingHex: 0x000000,
  });

  return (
    <>
      <mesh ref={planetRef} position={[0, 0, 0]} scale={[1, oblateness, 1]}>
        <sphereGeometry args={[radius, 50, 50]} />
        <meshPhongMaterial map={colorTexture} />
      </mesh>
      <mesh
        ref={glowRef}
        scale={[1.005, 1.005 * oblateness, 1.005]}
        position={[0, 0, 0]}
      >
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>
    </>
  );
}

export default Mercury;
