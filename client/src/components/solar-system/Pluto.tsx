import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';
import plutoColor from '../../assets/planets/pluto/pluto-color-2k.jpg';
import plutoBump from '../../assets/planets/pluto/pluto-bump-2k.jpg';

function Pluto() {
  const jupiterRef = useRef<Mesh>(null!);
  const colorTexture = useLoader(TextureLoader, plutoColor);
  const bumpTexture = useLoader(TextureLoader, plutoBump);

  useFrame(() => {
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshStandardMaterial
        map={colorTexture}
        bumpMap={bumpTexture}
        bumpScale={40}
      />
    </mesh>
  );
}

export default Pluto;
