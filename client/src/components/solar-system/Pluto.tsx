import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';
import plutoColor from '../../assets/planets/pluto/pluto-color-2k.jpg';
import plutoBump from '../../assets/planets/pluto/pluto-bump-2k.jpg';
import getFresnelMat from '../../functions/getFresnelMat';

function Pluto() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const colorTexture = useLoader(TextureLoader, plutoColor);
  const bumpTexture = useLoader(TextureLoader, plutoBump);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: 0xb3cde0, // Customize glow color
    facingHex: 0x000000, // Center color
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[16, 50, 50]} />
        <meshStandardMaterial
          map={colorTexture}
          bumpMap={bumpTexture}
          bumpScale={2}
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

export default Pluto;
