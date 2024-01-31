import { useRef, useState } from 'react';
import { Mesh, MeshBasicMaterial, Color, BufferGeometry, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

type LightSpeedStarProps = {
  position: Vector3 | [number, number, number];
  geometry: BufferGeometry;
  startLightspeed: boolean;
};

const LightSpeedStar = ({
  position,
  geometry,
  startLightspeed,
}: LightSpeedStarProps) => {
  const meshRef = useRef<Mesh>(null);
  const [colorChanged, setColorChanged] = useState(false); // Track if color has been changed

  useFrame(({ clock }) => {
    if (meshRef.current) {
      if (startLightspeed) {
        const elapsedTime =
          clock.getElapsedTime() - (meshRef.current.userData.startTime ?? 0);

        if (elapsedTime < 1) {
          (meshRef.current.material as MeshBasicMaterial).color.lerp(
            new Color('#4A8CD9'),
            0.1
          ); // Gradually change color to blue
          meshRef.current.scale.z += 12; // Scale z-axis for length
          meshRef.current.scale.x += 0.04; // Scale x-axis for thickness
          meshRef.current.scale.y += 0.04; // Scale y-axis for thickness
          setColorChanged(true);
        }
      } else if (meshRef.current && !startLightspeed && !colorChanged) {
        meshRef.current.userData.startTime = clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={
        new MeshBasicMaterial({ color: colorChanged ? '#4A8CD9' : 'white' })
      }
    />
  );
};

export default LightSpeedStar;
