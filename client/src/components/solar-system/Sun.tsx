import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import noiseShader from '../../shaders/sunShader.glsl';
import { Color, Mesh, ShaderMaterial } from 'three';

function Sun() {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    const material = new ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new Color(0xffff80) },
        color2: { value: new Color(0xff8000) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        ${noiseShader} // This imports the GLSL noise functions
        void main() {
          float noise = snoise(vec4(vUv, time, time));
          vec3 color = mix(color1, color2, noise);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });

    if (meshRef.current) {
      meshRef.current.material = material;
    }
  }, []); // Empty dependency array means this effect runs once on mount

  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as ShaderMaterial).uniforms.time.value =
        clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      {/* No need to set the material here as it's set in the useEffect hook */}
    </mesh>
  );
}

export default Sun;
