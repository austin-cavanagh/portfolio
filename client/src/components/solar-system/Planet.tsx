import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';

type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  color: string;
  semiMajorAxis: number;
  eccentricity: number;
};

function Planet({
  radius,
  rotation,
  oblateness,
  orbitSpeed,
  glowColor,
  color,
  semiMajorAxis,
  eccentricity,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, color);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2);

    const angle = elapsedTime * orbitSpeed;
    const r =
      (semiMajorAxis * semiMinorAxis) /
      Math.sqrt(
        (semiMinorAxis * Math.cos(angle)) ** 2 +
          (semiMajorAxis * Math.sin(angle)) ** 2,
      );

    const planetX = r * Math.cos(angle);
    const planetZ = r * Math.sin(angle);
    if (planetRef.current) {
      planetRef.current.rotation.y += rotation;
      planetRef.current.position.x = planetX;
      planetRef.current.position.z = planetZ;
    }

    if (glowRef.current) {
      glowRef.current.position.x = planetX;
      glowRef.current.position.z = planetZ;
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

export default Planet;
