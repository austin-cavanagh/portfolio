import { useFrame, useLoader } from '@react-three/fiber';
import {
  AdditiveBlending,
  Color,
  DoubleSide,
  Mesh,
  TextureLoader,
} from 'three';
import { useRef } from 'react';

// import earthColor from '../../assets/planets/earth/earth-color.jpg';
// import earthBump from '../../assets/planets/earth/earth-bump.jpg';

import earthColor from '../../assets/planets/earth/earth-color-4k.jpg';
import earthBump from '../../assets/planets/earth/earth-bump-4k.jpg';
import earthLights from '../../assets/planets/earth/earth-lights-4k.jpg';
import earthClouds from '../../assets/planets/earth/earth-clouds.jpg';
// import earthCloudsTransparency from '../../assets/planets/earth/earth-clouds-transparancy.jpg';
import earthCloudsTransparency from '../../assets/planets/earth/earth-clouds-transparency-inverted.jpg';

function Earth() {
  const planetRef = useRef<Mesh>(null!);
  const cloudsRef = useRef<Mesh>(null);

  const sunTexture = useLoader(TextureLoader, earthColor);
  const bumpTexture = useLoader(TextureLoader, earthBump);
  const lightsTexture = useLoader(TextureLoader, earthLights);
  const cloudsTexture = useLoader(TextureLoader, earthClouds);
  const cloudsTransparencyTexture = useLoader(
    TextureLoader,
    earthCloudsTransparency,
  );

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0011;
    }
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshStandardMaterial
          map={sunTexture}
          bumpMap={bumpTexture}
          bumpScale={3}
          emissiveMap={lightsTexture} // Use the city lights texture as an emissive map
          emissive={new Color(0xffffff)} // The color of the emitted light, typically white
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshStandardMaterial
          map={cloudsTexture}
          alphaMap={cloudsTransparencyTexture}
          opacity={0.5}
          depthWrite={false}
          transparent={true}
          side={DoubleSide}
          // emissive={new Color(0xffffff)} // Makes clouds slightly emissive
          // emissiveIntensity={0} // Subtle glow to enhance whiteness
        />
      </mesh>
    </>
  );
}

export default Earth;
