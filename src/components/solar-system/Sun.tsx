import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, ShaderMaterial } from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import getSunShader from '../../functions/getSunShader';

function Sun() {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  const fresnelMaterialProps = getFresnelMat({
    rimHex: 0xff0000,
    facingHex: 0xffd700,
  });

  useEffect(() => {
    const material = getSunShader();

    if (planetRef.current) {
      planetRef.current.material = material;
    }
  }, []);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const material = planetRef.current.material as ShaderMaterial;
      material.uniforms.time.value = clock.getElapsedTime();

      planetRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[25, 50, 50]} />
      </mesh>

      <mesh ref={glowRef} scale={[1.005, 1.005, 1.005]} position={[0, 0, 0]}>
        <icosahedronGeometry args={[10, 50]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>
    </>
  );
}

export default Sun;
