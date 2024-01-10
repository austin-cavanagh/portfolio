import { useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry } from 'three';
import starPositions from '../utils/starPositions';
import LightSpeedStar from './LightSpeedStar';

const LightSpeed = () => {
  const [startLightspeed, setLightspeed] = useState(false);
  const [moveCamera, setMoveCamera] = useState(false);

  // useMemo to ensure positions are generated only once
  const positions = useMemo(() => starPositions(), []);
  const geometry = useMemo(() => new SphereGeometry(0.01, 32, 32), []);

  useEffect(() => {
    // This timer will start the hyperspace effect
    const hyperspaceTimer = setTimeout(() => {
      setLightspeed(true);
    }, 1000); // Trigger after 1 second

    // This timer will start the camera movement
    const cameraTimer = setTimeout(() => {
      setMoveCamera(true);
    }, 1800); // Begin moving the camera after 1.8 seconds

    return () => {
      clearTimeout(hyperspaceTimer);
      clearTimeout(cameraTimer);
    };
  }, []);

  useFrame(state => {
    if (moveCamera) {
      state.camera.position.z -= 0.4;
    }
  });

  return (
    <>
      {positions.map((position, index) => (
        <LightSpeedStar
          key={index}
          position={position}
          geometry={geometry}
          startLightspeed={startLightspeed}
        />
      ))}
      {/* Uncomment if you want to use OrbitControls */}
      {/* <OrbitControls /> */}
    </>
  );
};

export default LightSpeed;
