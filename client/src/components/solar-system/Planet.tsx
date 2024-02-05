import { useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import { PlanetProps } from './SceneContents';
import AnimatedWireframe from './AnimatedWireframe';

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
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
  const highlightRef = useRef<Mesh>(null!);

  const ring1Ref = useRef<Mesh>(null!);
  const ring2Ref = useRef<Mesh>(null!);
  const ring3Ref = useRef<Mesh>(null!);

  const [hovered, setHovered] = useState(false);

  const colorTexture = useLoader(TextureLoader, color);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const c = semiMajorAxis * eccentricity;
    const angle = elapsedTime * orbitSpeed;

    const x = semiMajorAxis * Math.cos(angle) - c;
    const z =
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

    if (highlightRef.current) {
      highlightRef.current.position.x = x;
      highlightRef.current.position.z = z;
      highlightRef.current.visible = hovered;
    }

    if (highlightRef.current && hovered) {
      highlightRef.current.rotation.y += 0.01;
    }

    if (ring1Ref.current) {
      ring1Ref.current.position.x = x;
      ring1Ref.current.position.z = z;
      ring1Ref.current.rotation.x += 0.01;
      ring1Ref.current.rotation.y += 0.01;
      //   ring1Ref.current.rotation.z += 0.01;
    }

    if (ring2Ref.current) {
      ring2Ref.current.position.x = x;
      ring2Ref.current.position.z = z;
      //   ring2Ref.current.rotation.x += 0.01;
      ring2Ref.current.rotation.y += 0.01;
    }

    if (ring3Ref.current) {
      ring3Ref.current.position.x = x;
      ring3Ref.current.position.z = z;
      //   ring3Ref.current.rotation.y += 0.01;
      ring3Ref.current.rotation.x += 0.01;
    }
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

  return (
    <>
      <mesh
        ref={planetRef}
        scale={[1, oblateness, 1]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <sphereGeometry args={[radius, 50, 50]} />
        <meshPhongMaterial map={colorTexture} />
      </mesh>

      {/* <mesh
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
      </mesh> */}

      {/* <mesh
        ref={highlightRef}
        scale={[1.2, 1.2 * oblateness, 1.2]}
        position={[0, 0, 0]}
        visible={false}
      >
        <sphereGeometry args={[radius, 8, 8]} />
        <meshBasicMaterial color={0x00bfff} wireframe />
      </mesh> */}

      {/* Ring 1 */}
      <mesh ref={ring1Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.3, 0.05, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.3, 0.05, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.3, 0.05, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>
    </>
  );
}

export default Planet;
