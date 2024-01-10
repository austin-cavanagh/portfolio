import React, { useMemo, useState, useEffect, useRef } from 'react';
import { SphereGeometry, MeshBasicMaterial, Color } from 'three';
import starPositions from '../utils/StarPositions';
import { useFrame } from '@react-three/fiber';

const Star = ({ position, geometry, startHyperspace }) => {
  const meshRef = useRef();
  const startTimeRef = useRef(null); // Ref to store the start time

  useFrame(({ clock }) => {
    if (meshRef.current) {
      if (startHyperspace) {
        if (startTimeRef.current === null) {
          startTimeRef.current = clock.getElapsedTime(); // Set start time
        }
        const elapsedTime = clock.getElapsedTime() - startTimeRef.current;

        if (elapsedTime < 0.8) {
          meshRef.current.scale.z += 2; // Scale z-axis for length
          meshRef.current.scale.x += 0.02; // Scale x-axis for thickness
          meshRef.current.scale.y += 0.02; // Scale y-axis for thickness
          meshRef.current.material.color.lerp(new Color('#4FC3FF'), 0.1); // Gradually change color to blue
        }
      } else {
        startTimeRef.current = null; // Reset start time when not in hyperspace
      }
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

const Stars = () => {
  // useMemo to ensure positions are generated only once
  const positions = useMemo(() => starPositions(), []);
  const geometry = useMemo(() => new SphereGeometry(0.01, 32, 32), []);
  const [startHyperspace, setStartHyperspace] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartHyperspace(true);
    }, 1000); // Trigger after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {positions.map((position, index) => (
        <Star
          key={index}
          position={position}
          geometry={geometry}
          startHyperspace={startHyperspace}
        />
      ))}
    </>
  );
};

export default Stars;
