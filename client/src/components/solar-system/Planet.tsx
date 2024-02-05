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

    // Ellipse parameters
    const c = semiMajorAxis * eccentricity; // Focal distance from the center to one of the foci
    const angle = elapsedTime * orbitSpeed; // This angle should ideally correlate with the orbital period

    // Calculate the planet's position using the ellipse formula
    // Adjusting x to account for the focal distance, using z instead of y for the depth axis
    const x = semiMajorAxis * Math.cos(angle) - c; // Adjust x for the focal length
    const z =
      semiMajorAxis *
      Math.sqrt(1 - eccentricity * eccentricity) *
      Math.sin(angle); // Use z in place of y

    // Update planet and glow positions
    if (planetRef.current) {
      planetRef.current.rotation.y += rotation;
      planetRef.current.position.x = x;
      planetRef.current.position.z = z; // Update z instead of y
    }

    if (glowRef.current) {
      glowRef.current.position.x = x;
      glowRef.current.position.z = z;
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
