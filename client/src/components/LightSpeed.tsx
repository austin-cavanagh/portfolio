import { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry } from 'three';
import starPositions from '../utils/starPositions';
import LightSpeedStar from './LightSpeedStar';
// import { OrbitControls } from '@react-three/drei';

const LightSpeed = () => {
  const [startHyperspace, setStartHyperspace] = useState(false);
  const animationStartTimeRef = useRef(0);
  const positions = useMemo(() => starPositions(), []);
  const geometry = useMemo(() => new SphereGeometry(0.01, 32, 32), []);

  useEffect(() => {
    // Start the hyperspace effect
    const timer = setTimeout(() => {
      setStartHyperspace(true);
    }, 1000); // Trigger after 1 second

    return () => clearTimeout(timer);
  }, []);

  useFrame(({ clock, camera }) => {
    if (startHyperspace) {
      if (animationStartTimeRef.current === 0) {
        animationStartTimeRef.current = clock.getElapsedTime();
      }

      const elapsedTime =
        clock.getElapsedTime() - animationStartTimeRef.current;

      // Start moving the camera slightly before the stars finish growing
      if (elapsedTime > 0.8) {
        camera.position.z -= 1.5; // speed of camera
      }
    }
  });

  return (
    <>
      {positions.map((position, index) => (
        <LightSpeedStar
          key={index}
          position={position}
          geometry={geometry}
          startLightspeed={startHyperspace}
        />
      ))}

      {/* <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>

      <OrbitControls /> */}
    </>
  );
};

export default LightSpeed;
