import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide } from 'three';

import uranusColor from '../../assets/planets/uranus/uranus-color.jpg';
import uranusRingColor from '../../assets/planets/uranus/uranus-ring-color.jpg';
import uranusRingPattern from '../../assets/planets/uranus/uranus-ring-pattern.gif';
import getFresnelMat from '../../functions/getFresnelMat';

function Uranus() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);

  const planetColor = useLoader(TextureLoader, uranusColor);
  const ringColor = useLoader(TextureLoader, uranusRingColor);
  const ringPattern = useLoader(TextureLoader, uranusRingPattern);

  ringColor.rotation = Math.PI / 2;
  ringPattern.rotation = Math.PI / 2;

  const orbitRadius = 0;
  const orbitSpeed = 0;

  useEffect(() => {
    if (planetRef.current) {
      planetRef.current.rotation.z = -(Math.PI * 90) / 180;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = -(Math.PI * 90) / 180;
    }
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.rotation.x += 0.001; // Adjust speed as needed

      planetRef.current.position.x =
        Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
      planetRef.current.position.z =
        Math.sin(elapsedTime * orbitSpeed) * orbitRadius;
    }

    if (ringRef.current) {
      // ringRef.current.position.x = planetRef.current.position.x;
      // ringRef.current.position.z = planetRef.current.position.z;
      // Optionally, sync ring rotation with planet rotation, if desired for visual effect
      // This would depend on how you want the rings to interact visually with the planet's rotation
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: 0x89cff0, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[10, 50, 50]} />
        <meshPhongMaterial map={planetColor} />
      </mesh>
      <mesh ref={glowRef} scale={[1.005, 1.005, 1.005]} position={[0, 0, 0]}>
        <icosahedronGeometry args={[10, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <torusGeometry args={[22.0, 1.0, 2.0, 100]} />
        <meshBasicMaterial
          map={ringColor}
          alphaMap={ringPattern}
          side={DoubleSide}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default Uranus;
