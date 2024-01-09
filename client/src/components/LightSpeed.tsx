import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';
import {
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
} from 'three';
import { OrbitControls } from '@react-three/drei';

extend({ PerspectiveCamera });

const Cone = () => {
  const meshRef = useRef<Mesh>(null);

  // This function will be called on every frame
  useFrame(() => {
    // Here you can add some animations or interactions with the cone
    if (meshRef.current) {
      // Rotate the cone to face the camera
      meshRef.current.rotation.x = -Math.PI / 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[5, 20, 32]} />{' '}
      {/* Cone parameters: radius, height, radial segments */}
      <meshBasicMaterial color={'blue'} wireframe />
    </mesh>
  );
};

const CameraIndicator = () => {
  const startPosition = new Vector3(0, 0, 20);
  const endPosition = new Vector3(0, 0, 0);

  // Geometry for the line indicating camera direction
  const points = [startPosition, endPosition];
  const geometry = new BufferGeometry().setFromPoints(points);

  return (
    <>
      {/* Sphere to represent the camera's starting position */}
      <mesh position={startPosition}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={'red'} />
      </mesh>

      {/* Line to represent the direction the camera is initially facing */}
      <line geometry={geometry}>
        <lineBasicMaterial color={'green'} />
      </line>
    </>
  );
};

const LightSpeed = () => {
  const cameraRef = useRef<PerspectiveCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      // Set the camera's position to align with the cone's opening
      cameraRef.current.position.set(0, 0, 20); // Adjust the position as needed
      cameraRef.current.lookAt(0, 0, 0); // Pointing the camera towards the end of the cone
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <perspectiveCamera ref={cameraRef} fov={75} position={[0, 0, 20]} />
        <Cone />
        <CameraIndicator />
        <OrbitControls /> {/* Add OrbitControls for camera movement */}
      </Canvas>
    </div>
  );
};

export default LightSpeed;
