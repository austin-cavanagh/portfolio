import React, { useRef, useEffect, useState } from 'react';
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
import Stars from './Stars';

// extend({ PerspectiveCamera });

const Cone = () => {
  const meshRef = useRef<Mesh>(null);

  // This function will be called on every frame
  useFrame(() => {
    // Here you can add some animations or interactions with the cone
    if (meshRef.current) {
      // Position the cone at [0, 0, 0]
      meshRef.current.position.set(0, 0, -20);

      // Rotate the cone to face the camera
      meshRef.current.rotation.x = -Math.PI / 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[5, 40, 32]} />{' '}
      {/* Cone parameters: radius, height, radial segments */}
      <meshBasicMaterial color={'blue'} wireframe />
    </mesh>
  );
};

const CameraIndicator = () => {
  const startPosition = new Vector3(0, 0, -20);
  const endPosition = new Vector3(0, 0, -20);

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
  const [moveCamera, setMoveCamera] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveCamera(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useFrame(state => {
    if (moveCamera) {
      state.camera.position.z -= 0.4;
    }
  });

  return (
    <>
      {/* <Cone /> */}
      <Stars />
      {/* <CameraIndicator /> */}
      {/* Add OrbitControls for camera movement */}
      {/* <OrbitControls /> */}
    </>
  );
};

export default LightSpeed;
