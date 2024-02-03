import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';

import venusColor from '../../assets/planets/venus/venus-color.jpg';
import venusBump from '../../assets/planets/venus/venus-bump.jpg';

function Venus() {
  const planetRef = useRef<Mesh>(null!);
  const colorTexture = useLoader(TextureLoader, venusColor);
  const bumpTexture = useLoader(TextureLoader, venusBump);

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
        bumpScale={1}
      />
    </mesh>
  );
}

export default Venus;
