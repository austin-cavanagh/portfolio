import { useContext, useEffect, useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Color, DoubleSide, Mesh, TextureLoader } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import OrbitPath from './OrbitPath';
import { PlanetProps } from '../../data/planets';

import { PlanetContext } from '../../context/PlanetContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { setCurrentPlanet } from '../../state/appSlice';

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
  bumpMap,
  ringColor,
  ringPattern,
  ringRadius,
  ringTubeRadius,
  bumpScale,
  cloudMap,
  cloudTransparancy,
  lightMap,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const cloudsRef = useRef<Mesh>(null!);

  const hoverRefOne = useRef<Mesh>(null!);
  const hoverRefTwo = useRef<Mesh>(null!);
  const hoverRefThree = useRef<Mesh>(null!);

  const selectedTime = useRef<number>(0);

  const { planetRefs, setPlanetRefs } = useContext(PlanetContext);

  const { currentPlanet, isTransitioning } = useSelector(
    (state: RootState) => state.app,
  );

  const dispatch = useDispatch<AppDispatch>();

  const { clock } = useThree();

  useEffect(() => {
    if (name !== 'Uranus') return;

    if (planetRef.current) {
      planetRef.current.rotation.z = -(Math.PI * 90) / 180;
    }

    if (ringRef.current) {
      ringRef.current.rotation.y = -(Math.PI * 90) / 180;
    }
  }, []);

  useEffect(() => {
    setPlanetRefs(prevRefs => ({
      ...prevRefs,
      [name]: planetRef,
    }));
  }, [name, planetRef, setPlanetRefs]);

  // When we deselect the planet update the selectedTime
  useEffect(() => {
    let pauseStart = 0;

    if (currentPlanet === name) {
      // When the planet is selected store the start time of the pause
      pauseStart = clock.getElapsedTime();
    }

    return () => {
      if (pauseStart !== 0) {
        // When the planet is deselected update the total pause time
        selectedTime.current += clock.getElapsedTime() - pauseStart;
      }
    };
  }, [currentPlanet, name, clock]);

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

  useFrame(({}) => {
    const elapsedTime = clock.getElapsedTime() - selectedTime.current;
    const c = semiMajorAxis * eccentricity;
    const angle = elapsedTime * orbitSpeed;

    // Update planet rotations
    if (planetRef.current && name === 'Uranus') {
      planetRef.current.rotation.x += rotation;
    } else {
      planetRef.current.rotation.y += rotation;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += rotation * 1.1;
    }

    // Do not need to update the planet position since it is not moving when selected
    if (name === currentPlanet) return;

    // Update moon to orbit around earths location
    if (name === 'Moon' && planetRefs.Earth?.current) {
      orbitCenter = planetRefs.Earth.current.position;
    }

    const newX = orbitCenter.x + semiMajorAxis * Math.cos(angle) - c;
    const newZ =
      orbitCenter.z +
      semiMajorAxis *
        Math.sqrt(1 - eccentricity * eccentricity) *
        Math.sin(angle);

    planetRef.current.position.x = newX;
    planetRef.current.position.z = newZ;

    if (glowRef.current) {
      glowRef.current.position.x = newX;
      glowRef.current.position.z = newZ;
    }

    if (hoverRefOne.current) {
      hoverRefOne.current.position.x = newX;
      hoverRefOne.current.position.z = newZ;
      hoverRefOne.current.rotation.x += 0.0095;
      hoverRefOne.current.rotation.y += 0.0095;
    }

    if (hoverRefTwo.current) {
      hoverRefTwo.current.position.x = newX;
      hoverRefTwo.current.position.z = newZ;
      hoverRefTwo.current.rotation.y += 0.009;
    }

    if (hoverRefThree.current) {
      hoverRefThree.current.position.x = newX;
      hoverRefThree.current.position.z = newZ;
      hoverRefThree.current.rotation.x += 0.009;
    }

    if (ringColor) {
      ringRef.current.position.x = newX;
      ringRef.current.position.z = newZ;
    }

    if (name === 'Earth' && cloudsRef.current) {
      cloudsRef.current.position.x = newX;
      cloudsRef.current.position.z = newZ;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: glowColor,
    facingHex: 0x000000,
  });

  const onPointerOver = (event: ThreeEvent<PointerEvent>) => {
    if (name === currentPlanet) return;
    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const onPointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handlePlanetClick = () => {
    if (name === currentPlanet || isTransitioning) return;
    dispatch(setCurrentPlanet(name));
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
          bumpScale={bumpScale}
          // Earth Lights
          {...(lightMap && {
            emissiveMap: useLoader(TextureLoader, lightMap),
            emissive: new Color(0xffffff),
            emissiveIntensity: 0.6,
          })}
        />
      </mesh>

      {/* Glow Mesh */}
      <mesh ref={glowRef} scale={[1.005, 1.005 * oblateness, 1.005]}>
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>

      {/* Planet Hover Animation */}
      {name !== currentPlanet && (
        <>
          <mesh ref={hoverRefOne} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={hoverRefTwo} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={hoverRefThree} visible={hovered}>
            <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
        </>
      )}

      {/* Planet Rings */}
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

      {/* Orbit Path */}
      {name !== 'Moon' && (
        <OrbitPath semiMajorAxis={semiMajorAxis} eccentricity={eccentricity} />
      )}

      {/* Earth Clouds */}
      {cloudMap && cloudTransparancy && (
        <mesh ref={cloudsRef} scale={[1.01, 1.01 * oblateness, 1.01]}>
          <sphereGeometry args={[radius, 50, 50]} />
          <meshPhongMaterial
            map={useLoader(TextureLoader, cloudMap)}
            alphaMap={useLoader(TextureLoader, cloudTransparancy)}
            opacity={0.4}
            depthWrite={false}
            transparent={true}
            side={DoubleSide}
          />
        </mesh>
      )}
    </>
  );
}

export default Planet;
