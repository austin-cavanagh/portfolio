import { useMemo, useState, useEffect } from 'react';
import { SphereGeometry } from 'three';
import starPositions from '../utils/starPositions';
import LightSpeedStar from './LightSpeedStar';

const LightSpeedStars = () => {
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
        <LightSpeedStar
          key={index}
          position={position}
          geometry={geometry}
          startHyperspace={startHyperspace}
        />
      ))}
    </>
  );
};

export default LightSpeedStars;
