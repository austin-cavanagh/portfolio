import { useContext, useEffect, useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  CanvasTexture,
  Color,
  DoubleSide,
  Mesh,
  Sprite,
  SpriteMaterial,
  TextureLoader,
} from 'three';
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

  const textSpriteRef = useRef<Sprite | null>(null);

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

  // Adjust planet, ring, and glow orientation based on planets axis tilt
  useEffect(() => {
    if (name !== 'Uranus') return;

    if (planetRef.current) {
      planetRef.current.rotation.z = -(Math.PI * 90) / 180;
    }

    if (ringRef.current) {
      ringRef.current.rotation.y = -(Math.PI * 90) / 180;
    }

    if (glowRef.current) {
      glowRef.current.rotation.z = -(Math.PI * 90) / 180;
    }
  }, []);

  // Code to handle the planet name positioning
  useEffect(() => {
    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256; // Adjust as needed
    canvas.height = 64; // Adjust as needed

    if (context) {
      // Style your text
      context.fillStyle = '#00bfff'; // Text color
      context.textBaseline = 'middle'; // Align text vertically in the middle
      context.textAlign = 'right'; // Align text to the right

      context.font = 'Bold 18px Arial'; // Adjust font style as needed
      context.fillText(name, 110, 30); // Adjust text position as needed

      if (textSpriteRef.current) {
        // Create texture from canvas
        const texture = new CanvasTexture(canvas);

        // Create sprite material with this texture
        const material = new SpriteMaterial({
          map: texture,
          sizeAttenuation: false, // This ensures the sprite's size remains constant on screen
        });

        // Assign material to sprite
        textSpriteRef.current.material = material;

        // Adjust sprite scale here if needed
        textSpriteRef.current.scale.set(0.2, 0.05, 1); // Scale values might need adjustment
      }
    }
  }, [name, currentPlanet]);

  // Add the planetRef to our context
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

  useFrame(({ clock }) => {
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

    // Adjusting the textStripeRef position
    if (textSpriteRef.current) {
      // Adjust the multiplier to control the height above the planet
      const offsetAbovePlanet = 1.2;
      textSpriteRef.current.position.x = newX;
      textSpriteRef.current.position.y =
        planetRef.current.position.y + radius * offsetAbovePlanet;
      textSpriteRef.current.position.z = newZ;
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
            emissiveIntensity: 0.4,
          })}
        />
      </mesh>

      {/* Planet Name Display */}
      {name !== 'Sun' && name !== 'Moon' && currentPlanet !== name && (
        <sprite ref={textSpriteRef} />
      )}

      {/* Glow Mesh */}
      <mesh ref={glowRef} scale={[1.005, 1.005 * oblateness, 1.005]}>
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Earth Clouds */}
      {cloudMap && cloudTransparancy && (
        <mesh ref={cloudsRef} scale={[1.015, 1.015 * oblateness, 1.015]}>
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

      {/* Planet Hover Animation */}
      {name !== currentPlanet && (
        <>
          <mesh ref={hoverRefOne} visible={hovered}>
            <torusGeometry args={[radius * 1.5, radius * 0.06, 3, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={hoverRefTwo} visible={hovered}>
            <torusGeometry args={[radius * 1.5, radius * 0.06, 3, 50]} />
            <meshBasicMaterial color={0x00bfff} />
          </mesh>
          <mesh ref={hoverRefThree} visible={hovered}>
            <torusGeometry args={[radius * 1.5, radius * 0.06, 3, 50]} />
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
    </>
  );
}

export default Planet;
