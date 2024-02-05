import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

// import mercuryColor from '../../assets/planets/mercury/mercury-color.webp';
import mercuryColor from '../../assets/planets/mercury/2k_mercury.jpg';

import getFresnelMat from '../../functions/getFresnelMat';

function Mercury() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, mercuryColor);

  const orbitRadius = 0;
  const orbitSpeed = 0;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;

      planetRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      planetRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: 0xb3cde0, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={planetRef} position={[0, 0, 0]}>
        <sphereGeometry args={[10, 50, 50]} />
        <meshStandardMaterial map={colorTexture} />
      </mesh>
      <mesh ref={glowRef} scale={[1.01, 1.01, 1.01]} position={[0, 0, 0]}>
        <icosahedronGeometry args={[10, 16]} />
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
