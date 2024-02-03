import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useRef } from 'react';
// import sunColor from '../../assets/planets/sun/sun-color.jpg';

// color of light, intensity, max distance the light can reach
// const pointLight = new THREE.PointLight(0xffffff, 2, 300);
// scene.add(pointLight);

function Sun() {
  const sunRef = useRef<Mesh>(null!);
  // const sunTexture = useLoader(TextureLoader, sunColor);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[16, 50, 50]} />
      <meshBasicMaterial />
    </mesh>
  );
}

export default Sun;
