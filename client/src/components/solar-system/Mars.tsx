import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';

import marsColor from '../../assets/planets/mars/mars-color-4k.jpg';
import marsBump from '../../assets/planets/mars/mars-bump.jpg';

function Mars() {
  const planetRef = useRef<Mesh>(null!);
  const colorTexture = useLoader(TextureLoader, marsColor);
  const bumpTexture = useLoader(TextureLoader, marsBump);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshStandardMaterial
        map={colorTexture}
        bumpMap={bumpTexture}
        bumpScale={5}
      />
    </mesh>
  );
}

export default Mars;
