import { useEffect, useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import { DoubleSide, Mesh, TextureLoader } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import { PlanetProps } from './SceneContents';
import OrbitPath from './OrbitPath';

import moonColor from '../../assets/planets/moon/moon-color-2k.jpg';
import moonBump from '../../assets/planets/moon/moon-bump-2k.jpg';

import * as TWEEN from '@tweenjs/tween.js';

const moon: PlanetProps = {
  semiMajorAxis: 40,
  eccentricity: 0.0549,
  orbitSpeed: 0.085,
  oblateness: 1,
  radius: 1.737,
  rotation: 0.002,
  glowColor: 0xaaaaaa,
  colorMap: moonColor,
  bumpMap: moonBump,
  name: 'Moon',
  orbitCenter: { x: 0, y: 0, z: 0 },
};

function Planet({
  radius,
  rotation,
  oblateness,
  orbitSpeed,
  glowColor,
  colorMap,
  semiMajorAxis,
  eccentricity,
  name,
  orbitCenter = { x: 0, y: 0, z: 0 },
  selectPlanet,
  selectedPlanet,
  bumpMap,
  ringColor,
  ringPattern,
  ringRadius,
  ringTubeRadius,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  const ring1Ref = useRef<Mesh>(null!);
  const ring2Ref = useRef<Mesh>(null!);
  const ring3Ref = useRef<Mesh>(null!);

  useEffect(() => {
    if (name !== 'Uranus') return;

    if (planetRef.current) {
      planetRef.current.rotation.z = -(Math.PI * 90) / 180;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = -(Math.PI * 90) / 180;
    }
  }, []);

  let planetPosition = { x: 0, y: 0, z: 0 };

  const [hovered, setHovered] = useState(false);

  const colorTexture = useLoader(TextureLoader, colorMap);
  const bumpTexture = bumpMap ? useLoader(TextureLoader, bumpMap) : null;
  const ringColorTexture = ringColor
    ? useLoader(TextureLoader, ringColor)
    : null;
  const ringPatternTexture = ringPattern
    ? useLoader(TextureLoader, ringPattern)
    : null;

  if (ringColorTexture && ringPatternTexture) {
    ringColorTexture.rotation = Math.PI / 2;
    ringPatternTexture.rotation = Math.PI / 2;
  }

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

    if (planetRef.current && name === 'Uranus') {
      planetRef.current.rotation.x += rotation;
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }

    if (planetRef.current && name !== 'Uranus') {
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

    if (ringColor) {
      ringRef.current.position.x = x;
      ringRef.current.position.z = z;
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
    if (selectPlanet) {
      console.log('clicked');
      selectPlanet(planetRef);
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
        <meshPhongMaterial
          map={colorTexture}
          bumpMap={bumpTexture}
          bumpScale={bumpTexture ? 5 : 0}
        />
      </mesh>

      <mesh ref={glowRef} scale={[1.005, 1.005 * oblateness, 1.005]}>
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>

      {planetRef !== selectedPlanet && (
        <>
          <mesh ref={ring1Ref} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={ring2Ref} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={ring3Ref} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
        </>
      )}

      <OrbitPath semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} />

      {ringRadius && ringTubeRadius && (
        <mesh ref={ringRef} rotation-x={Math.PI / 2}>
          <torusGeometry args={[ringRadius, ringTubeRadius, 2.0, 100]} />
          <meshBasicMaterial
            map={ringColorTexture}
            alphaMap={ringPatternTexture}
            side={DoubleSide}
            transparent={true}
            depthWrite={false}
          />
        </mesh>
      )}

      {name !== 'Moon' && (
        <OrbitPath semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} />
      )}

      {name === 'Earth' && (
        <Planet
          {...moon}
          orbitCenter={planetPosition}
          selectPlanet={selectPlanet}
        />
      )}
    </>
  );
}

export default Planet;
