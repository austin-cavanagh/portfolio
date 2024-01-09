import React, { useMemo } from 'react';
import { SphereGeometry, MeshBasicMaterial } from 'three';
import starPositions from '../utils/StarPositions';

const Star = ({ position, geometry, material }) => {
  return <mesh position={position} geometry={geometry} material={material} />;
};

const Stars = () => {
  const positions = starPositions();
  const geometry = useMemo(() => new SphereGeometry(1, 32, 32), []); // Sphere with radius 1 and 32 segments
  const material = useMemo(() => new MeshBasicMaterial({ color: 'white' }), []);

  return (
    <>
      {positions.map((position, index) => (
        <Star
          key={index}
          position={position}
          geometry={geometry}
          material={material}
        />
      ))}
    </>
  );
};

export default Stars;
