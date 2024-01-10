import React, { useRef } from 'react';
import { Mesh, MeshBasicMaterial, Color, BufferGeometry, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

type LightSpeedStarProps = {
  position: Vector3 | [number, number, number];
  geometry: BufferGeometry;
  startHyperspace: boolean;
};

const LightSpeedStar: React.FC<LightSpeedStarProps> = ({
  position,
  geometry,
  startHyperspace,
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current && startHyperspace) {
      const elapsedTime =
        clock.getElapsedTime() - (meshRef.current.userData.startTime ?? 0);

      if (elapsedTime < 0.8) {
        meshRef.current.scale.z += 2; // Scale z-axis for length
        meshRef.current.scale.x += 0.02; // Scale x-axis for thickness
        meshRef.current.scale.y += 0.02; // Scale y-axis for thickness
        (meshRef.current.material as MeshBasicMaterial).color.lerp(
          new Color('#4FC3FF'),
          0.1
        ); // Gradually change color to blue
      }
    } else if (meshRef.current && !startHyperspace) {
      meshRef.current.userData.startTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={new MeshBasicMaterial({ color: 'white' })}
    />
  );
};

export default LightSpeedStar;
