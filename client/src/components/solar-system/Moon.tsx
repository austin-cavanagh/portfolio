import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';

import moonColor from '../../assets/planets/moon/moon-color-4k.jpg';
import moonBump from '../../assets/planets/moon/moon-bump-4k.jpg';
import getFresnelMat from '../../functions/getFresnelMat';

function Moon() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, moonColor);
  const bumpTexture = useLoader(TextureLoader, moonBump);

  const orbitRadius = 0;
  const orbitSpeed = 0;
  const position: [number, number, number] = [0, 0, 0];

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
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[10, 50, 50]} />
        <meshPhongMaterial
          map={colorTexture}
          bumpMap={bumpTexture}
          bumpScale={1}
        />
      </mesh>
      <mesh ref={glowRef} scale={[1.005, 1.005, 1.005]} position={[0, 0, 0]}>
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

export default Moon;
