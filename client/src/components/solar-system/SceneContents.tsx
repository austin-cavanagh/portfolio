import { OrbitControls, Stars } from '@react-three/drei';
import OrbitPath from './OrbitPath';

import Sun from './Sun';
import Mercury from './Mercury';
import Venus from './Venus';
import Earth from './Earth';
import Moon from './Moon';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import Pluto from './Pluto';
import Planet from './Planet';

import mercuryColor from '../../assets/planets/mercury/mercury-color-2k.jpg';
import venusColor from '../../assets/planets/venus/venus-color-2k.jpg';
import earthColor from '../../assets/planets/earth/earth-color-4k.jpg';
import marsColor from '../../assets/planets/mars/mars-color-4k.jpg';
import jupiterColor from '../../assets/planets/jupiter/jupiter-color-2k.jpg';
import saturnColor from '../../assets/planets/saturn/saturn-color-2k.jpg';
import uranusColor from '../../assets/planets/uranus/uranus-color-2k.jpg';
import neptuneColor from '../../assets/planets/neptune/neptune-color-2k.jpg';
import plutoColor from '../../assets/planets/pluto/pluto-color-2k.jpg';
import { useRef, useState } from 'react';
import * as TWEEN from '@tweenjs/tween.js';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  color: string;
  semiMajorAxis: number;
  eccentricity: number;
  name: string;
  orbitCenter?: { x: number; y: number; z: number };
  focusOnPlanet?: (position: { x: number; y: number; z: number }) => void;
};

const mercury: PlanetProps = {
  radius: 5,
  semiMajorAxis: 100,
  eccentricity: 0.2056,

  orbitSpeed: 0.1,
  oblateness: 1,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  color: mercuryColor,
  name: 'Mercury',
};

const venus: PlanetProps = {
  radius: 10,
  semiMajorAxis: 200,
  eccentricity: 0.0067,

  orbitSpeed: 0.0,
  oblateness: 1,
  rotation: -0.001,
  glowColor: 0xffd700,
  color: venusColor,
  name: 'Venus',
};

// const earth: PlanetProps = {
//   radius: 11,
//   semiMajorAxis: 300,
//   eccentricity: 0.0167,

//   orbitSpeed: 0.01,
//   oblateness: 1,
//   rotation: 0.00417,
//   glowColor: 0x0088ff,
//   color: earthColor,
//   name: 'Earth',
// };

// const mars: PlanetProps = {
//   radius: 8,
//   semiMajorAxis: 450,
//   eccentricity: 0.0935,

//   orbitSpeed: 0.001,
//   oblateness: 1,
//   rotation: 0.00427,
//   glowColor: 0xff4500,
//   color: marsColor,
//   name: 'Mars',
// };

// const jupiter: PlanetProps = {
//   radius: 20,
//   semiMajorAxis: 620,
//   eccentricity: 0.0489,

//   orbitSpeed: 0.00084,
//   oblateness: 1.069,
//   rotation: 0.001,
//   glowColor: 0xffa500,
//   color: jupiterColor,
//   name: 'Jupiter',
// };

// const saturn: PlanetProps = {
//   radius: 16,
//   semiMajorAxis: 800,
//   eccentricity: 0.0565,

//   orbitSpeed: 0.034,
//   oblateness: 1.083,
//   rotation: 0.05,
//   glowColor: 0xcba135,
//   color: saturnColor,
//   name: 'Saturn',
// };

// const uranus: PlanetProps = {
//   radius: 10,
//   semiMajorAxis: 970,
//   eccentricity: 0.0457,

//   orbitSpeed: 0.012,
//   oblateness: 1.011,
//   rotation: 0.72,
//   glowColor: 0x1ec2a4,
//   color: uranusColor,
//   name: 'Uranus',
// };

// const neptune: PlanetProps = {
//   radius: 10,
//   semiMajorAxis: 1100,
//   eccentricity: 0.0113,

//   orbitSpeed: 0.012,
//   oblateness: 1.011,
//   rotation: 0.02,
//   glowColor: 0x1ec2a4,
//   color: neptuneColor,
//   name: 'Neptune',
// };

// const pluto: PlanetProps = {
//   radius: 5,
//   semiMajorAxis: 1200,
//   eccentricity: 0.0444,

//   orbitSpeed: 0.012,
//   oblateness: 1.011,
//   rotation: 0.02,
//   glowColor: 0x1ec2a4,
//   color: plutoColor,
//   name: 'Pluto',
// };

function SceneContents() {
  const orbitControlsRef = useRef<any>(null!);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const progressRef = useRef<number>(0);

  const camera = useThree().camera;

  const focusOnPlanet = (planetRef: any) => {
    // const newCameraPosition = {
    //   x: planetRef.current.position.x + 30,
    //   y: planetRef.current.position.y,
    //   z: planetRef.current.position.z,
    // };

    // const newTargetPosition = {
    //   x: planetRef.current.position.x,
    //   y: planetRef.current.position.y,
    //   z: planetRef.current.position.z,
    // };

    // // Animate new camera position
    // new TWEEN.Tween(camera.position)
    //   .to(newCameraPosition, 2000)
    //   .easing(TWEEN.Easing.Cubic.InOut)
    //   .onUpdate(() => {})
    //   .start();

    // Animate new orbit controls target position
    // new TWEEN.Tween(orbitControlsRef.current.target)
    //   .to(newTargetPosition, 2000)
    //   .easing(TWEEN.Easing.Quadratic.InOut)
    //   .onUpdate(() => {})
    //   .start();

    progressRef.current = 0;
    setSelectedPlanet(planetRef);
  };

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  useFrame((state, delta) => {
    if (selectedPlanet && progressRef.current < 1) {
      const planetPosition = new Vector3();
      selectedPlanet.current.getWorldPosition(planetPosition);
      const cameraPosition = planetPosition.clone().add(new Vector3(30, 0, 0)); // Your logic for the camera position

      progressRef.current += delta; // Update progress based on the frame's delta time
      const progress = Math.min(progressRef.current, 1); // Clamp progress to 1

      // Apply any easing function to progress
      const easeFactor = easeInOut(progress); // Assuming you have an easing function

      // Use the easeFactor with lerpVectors or any other interpolation you prefer
      camera.position.lerpVectors(camera.position, cameraPosition, easeFactor);
      orbitControlsRef.current.target.lerpVectors(
        orbitControlsRef.current.target,
        planetPosition,
        easeFactor,
      );
    }

    if (selectedPlanet && progressRef.current > 1) {
      const planetPosition = new Vector3();
      selectedPlanet.current.getWorldPosition(planetPosition);

      // Update orbit controls target to the current position of the planet.
      orbitControlsRef.current.target.lerp(planetPosition, 0.1);

      // Calculate direction from planet to camera
      const direction = new Vector3()
        .subVectors(camera.position, planetPosition)
        .normalize();

      // Desired distance from the planet
      const distance = 30; // Adjust this value to the desired distance

      // Calculate desired camera position based on the direction and distance
      const desiredCameraPosition = new Vector3().addVectors(
        planetPosition,
        direction.multiplyScalar(distance),
      );

      // Optionally, smoothly transition the camera to the desired position to maintain distance while allowing user control
      // This step is optional and can be adjusted or removed based on user experience preference
      camera.position.lerp(desiredCameraPosition, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={2.5} />

      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={!selectedPlanet}
      />

      {/* <pointLight
        position={[40, 0, 0]}
        color={0xffffff}
        intensity={5000}
        distance={300}
      /> */}
      <Sun />

      <Planet {...mercury} focusOnPlanet={focusOnPlanet} />

      <Planet {...venus} focusOnPlanet={focusOnPlanet} />

      {/* <Planet {...earth} />

      <Planet {...mars} />

      <Planet {...jupiter} />

      <Planet {...saturn} />

      <Planet {...uranus} />

      <Planet {...neptune} />

      <Planet {...pluto} /> */}

      {/* <Mercury /> */}
      {/* <Venus /> */}
      {/* <Earth /> */}
      {/* <Moon /> */}
      {/* <Mars /> */}
      {/* <Jupiter /> */}
      {/* <Saturn /> */}
      {/* <Uranus /> */}
      {/* <Neptune /> */}
      {/* <Pluto /> */}

      {/* <Stars
        radius={100} // Radius of the sphere that contains the stars
        depth={50} // Depth of the star field
        count={5000} // Number of stars
        factor={4} // Variability of star size
        saturation={0} // Color saturation
        fade // Fades the stars toward the horizon
      /> */}
    </>
  );
}

export default SceneContents;
