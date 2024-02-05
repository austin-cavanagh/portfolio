import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useEffect, useRef } from 'react';
import jupiterColor from '../../assets/planets/jupiter/jupiter-color-4k.jpg';
import getFresnelMat from '../../functions/getFresnelMat';

function Jupiter() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, jupiterColor);

  useEffect(() => {
    if (planetRef.current) {
      planetRef.current.scale.y = 0.94;
    }

    if (glowRef.current) {
      glowRef.current.scale.y = 0.941;
    }
  }, []);

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
    rimHex: 0xffa500, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshStandardMaterial map={colorTexture} />
      </mesh>
      <mesh ref={glowRef} scale={[1.005, 1.005, 1.005]} position={[0, 0, 0]}>
        <icosahedronGeometry args={[16, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>
    </>
  );
}

export default Jupiter;
