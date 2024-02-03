import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import sunColor from '../../assets/planets/sun/sun-color.jpg';
import { useRef } from 'react';

// color of light, intensity, max distance the light can reach
// const pointLight = new THREE.PointLight(0xffffff, 2, 300);
// scene.add(pointLight);

function Sun() {
  const sunRef = useRef<Mesh>(null!);
  const sunTexture = useLoader(TextureLoader, sunColor);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[16, 30, 30]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
}

export default Sun;
