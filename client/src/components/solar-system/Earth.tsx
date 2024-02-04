import { useFrame, useLoader } from '@react-three/fiber';
import { Color, DoubleSide, Mesh, TextureLoader } from 'three';
import { useRef } from 'react';

import earthColor from '../../assets/planets/earth/earth-color-4k.jpg';
import earthBump from '../../assets/planets/earth/earth-bump-4k.jpg';
import earthLights from '../../assets/planets/earth/earth-lights-4k.jpg';
import earthClouds from '../../assets/planets/earth/earth-clouds.jpg';
import earthCloudsTransparency from '../../assets/planets/earth/earth-clouds-transparency-inverted.jpg';
import getFresnelMat from '../../functions/getFresnelMat';

function Earth() {
  const planetRef = useRef<Mesh>(null!);
  const cloudsRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const sunTexture = useLoader(TextureLoader, earthColor);
  const bumpTexture = useLoader(TextureLoader, earthBump);
  const lightsTexture = useLoader(TextureLoader, earthLights);
  const cloudsTexture = useLoader(TextureLoader, earthClouds);
  const cloudsTransparencyTexture = useLoader(
    TextureLoader,
    earthCloudsTransparency,
  );

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

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0011;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    // rimHex: 0x93c5fd, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshPhongMaterial
          map={sunTexture}
          bumpMap={bumpTexture}
          bumpScale={3}
          emissiveMap={lightsTexture} // Use the city lights texture as an emissive map
          emissive={new Color(0xffffff)} // Color of the emitted light, typically white
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh ref={cloudsRef} scale={[1.005, 1.005, 1.005]}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshStandardMaterial
          map={cloudsTexture}
          alphaMap={cloudsTransparencyTexture}
          opacity={0.5}
          depthWrite={false}
          transparent={true}
          side={DoubleSide}
        />
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

export default Earth;
