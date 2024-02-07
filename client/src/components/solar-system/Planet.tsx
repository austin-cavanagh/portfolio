import { useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Mesh, TextureLoader, Vector3 } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import { PlanetProps } from './SceneContents';
import OrbitPath from './OrbitPath';

import moonColor from '../../assets/planets/moon/moon-color-2k.jpg';

import * as TWEEN from '@tweenjs/tween.js';

// const moon: PlanetProps = {
//   semiMajorAxis: 20,
//   eccentricity: 0.0549,
//   orbitSpeed: 0.785,
//   oblateness: 1,
//   radius: 1.737,
//   rotation: 0.002,
//   glowColor: 0xaaaaaa,
//   color: moonColor,
//   name: 'Moon',
//   orbitCenter: { x: 0, y: 0, z: 0 },
// };

function Planet({
  radius,
  rotation,
  oblateness,
  orbitSpeed,
  glowColor,
  color,
  semiMajorAxis,
  eccentricity,
  name,
  orbitCenter = { x: 0, y: 0, z: 0 },
  focusOnPlanet,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const ring1Ref = useRef<Mesh>(null!);
  const ring2Ref = useRef<Mesh>(null!);
  const ring3Ref = useRef<Mesh>(null!);

  let planetPosition = { x: 0, y: 0, z: 0 };

  const [hovered, setHovered] = useState(false);

  const colorTexture = useLoader(TextureLoader, color);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const c = semiMajorAxis * eccentricity;
    const angle = elapsedTime * orbitSpeed;

    const x = orbitCenter.x + semiMajorAxis * Math.cos(angle) - c;
    const z =
      orbitCenter.z +
      semiMajorAxis *
        Math.sqrt(1 - eccentricity * eccentricity) *
        Math.sin(angle);

    if (planetRef.current) {
      planetRef.current.rotation.y += rotation;
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }

    if (glowRef.current) {
      glowRef.current.position.x = x;
      glowRef.current.position.z = z;
    }

    if (ring1Ref.current) {
      ring1Ref.current.position.x = x;
      ring1Ref.current.position.z = z;
      ring1Ref.current.rotation.x += 0.0095;
      ring1Ref.current.rotation.y += 0.0095;
    }

    if (ring2Ref.current) {
      ring2Ref.current.position.x = x;
      ring2Ref.current.position.z = z;
      ring2Ref.current.rotation.y += 0.009;
    }

    if (ring3Ref.current) {
      ring3Ref.current.position.x = x;
      ring3Ref.current.position.z = z;
      ring3Ref.current.rotation.x += 0.009;
    }

    if (name === 'Earth') {
      planetPosition.x = x;
      planetPosition.z = z;
    }

    TWEEN.update();
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: glowColor,
    facingHex: 0x000000,
  });

  const onPointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const onPointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handlePlanetClick = () => {
    if (focusOnPlanet) {
      focusOnPlanet(planetRef);
    }
  };

  return (
    <>
      <mesh
        ref={planetRef}
        scale={[1, oblateness, 1]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={() => handlePlanetClick()}
      >
        <sphereGeometry args={[radius, 50, 50]} />
        <meshPhongMaterial map={colorTexture} />
      </mesh>

      <mesh ref={glowRef} scale={[1.005, 1.005 * oblateness, 1.005]}>
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      <OrbitPath semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} />

      {/* {name !== 'Moon' && (
      )}
      {name === 'Earth' && <Planet {...moon} orbitCenter={planetPosition} />} */}
    </>
  );
}

export default Planet;
