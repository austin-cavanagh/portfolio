import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';

const CameraMover = () => {
  const cameraRef = useRef<PerspectiveCamera>(null);
  const [startMoving, setStartMoving] = useState(false);

  useEffect(() => {
    // Start moving after a delay
    const timer = setTimeout(() => setStartMoving(true), 2000);
    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  useFrame(() => {
    if (startMoving && cameraRef.current) {
      cameraRef.current.position.x += 0.01; // Adjust speed as needed
      console.log('moving');
    }
  });

  return <perspectiveCamera ref={cameraRef} fov={75} position={[0, 0, 0]} />;
};
export default CameraMover;
