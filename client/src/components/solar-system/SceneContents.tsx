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

const earth: PlanetProps = {
  radius: 11,
  semiMajorAxis: 300,
  eccentricity: 0.0167,

  orbitSpeed: 0.01,
  oblateness: 1,
  rotation: 0.00417,
  glowColor: 0x0088ff,
  color: earthColor,
  name: 'Earth',
};

const mars: PlanetProps = {
  radius: 8,
  semiMajorAxis: 450,
  eccentricity: 0.0935,

  orbitSpeed: 0.001,
  oblateness: 1,
  rotation: 0.00427,
  glowColor: 0xff4500,
  color: marsColor,
  name: 'Mars',
};

const jupiter: PlanetProps = {
  radius: 20,
  semiMajorAxis: 620,
  eccentricity: 0.0489,

  orbitSpeed: 0.00084,
  oblateness: 1.069,
  rotation: 0.001,
  glowColor: 0xffa500,
  color: jupiterColor,
  name: 'Jupiter',
};

const saturn: PlanetProps = {
  radius: 16,
  semiMajorAxis: 800,
  eccentricity: 0.0565,

  orbitSpeed: 0.034,
  oblateness: 1.083,
  rotation: 0.05,
  glowColor: 0xcba135,
  color: saturnColor,
  name: 'Saturn',
};

const uranus: PlanetProps = {
  radius: 10,
  semiMajorAxis: 970,
  eccentricity: 0.0457,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.72,
  glowColor: 0x1ec2a4,
  color: uranusColor,
  name: 'Uranus',
};

const neptune: PlanetProps = {
  radius: 10,
  semiMajorAxis: 1100,
  eccentricity: 0.0113,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: neptuneColor,
  name: 'Neptune',
};

const pluto: PlanetProps = {
  radius: 5,
  semiMajorAxis: 1200,
  eccentricity: 0.0444,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: plutoColor,
  name: 'Pluto',
};

function SceneContents() {
  const orbitControlsRef = useRef<any>(null!);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const progressRef = useRef<number>(0);

  const camera = useThree().camera;

  const focusOnPlanet = (planetRef: any) => {
    console.log(planetRef.current.geometry.parameters.radius);

    progressRef.current = 0;
    setSelectedPlanet(planetRef);
  };

  // Function to calculate a point on a quadratic bezier curve
  const calculateBezierPoint = (t, start, control, end) => {
    const invT = 1 - t;
    return start
      .clone()
      .multiplyScalar(invT * invT)
      .add(control.clone().multiplyScalar(2 * invT * t))
      .add(end.clone().multiplyScalar(t * t));
  };

  useFrame((_, delta) => {
    // only update code inside of this if statement
    if (selectedPlanet && progressRef.current < 1) {
      const planetRadius = selectedPlanet.current.geometry.parameters.radius;

      const start = camera.position.clone();
      const planetPosition = new Vector3();
      selectedPlanet.current.getWorldPosition(planetPosition);

      // Define the end position with an offset to avoid direct center targeting
      const offsetEnd = planetPosition
        .clone()
        .add(
          new Vector3(
            0,
            0,
            selectedPlanet.current.geometry.parameters.radius * 4,
          ),
        );
      const controlPoint = new Vector3(
        (start.x + offsetEnd.x) / 2,
        Math.max(start.y, offsetEnd.y) + planetRadius * 1.5,
        (start.z + offsetEnd.z) / 2,
      ); // Control point for the bezier curve, adjusted for a smoother arc

      // Calculate the current point on the bezier curve
      const t = progressRef.current;
      const bezierPoint = calculateBezierPoint(
        t,
        start,
        controlPoint,
        offsetEnd,
      );

      camera.position.lerp(bezierPoint, 0.1); // Smoothly interpolate camera position towards the bezier curve point
      orbitControlsRef.current.target.lerp(planetPosition, t); // Smoothly adjust the target to look at the planet

      progressRef.current += delta * 0.25;
    }

    // if (selectedPlanet && progressRef.current > 1) {
    //   const planetPosition = new Vector3();
    //   const planetRadius = selectedPlanet.current.geometry.parameters.radius;

    //   selectedPlanet.current.getWorldPosition(planetPosition);

    //   orbitControlsRef.current.target.lerp(planetPosition, 0.1);

    //   const direction = new Vector3()
    //     .subVectors(camera.position, planetPosition)
    //     .normalize();

    //   const distance = planetRadius * 4;

    //   const desiredCameraPosition = new Vector3().addVectors(
    //     planetPosition,
    //     direction.multiplyScalar(distance),
    //   );

    //   camera.position.lerp(desiredCameraPosition, 0.05);
    // }
  });

  return (
    <>
      <ambientLight intensity={2.5} />

      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        // enableZoom={!selectedPlanet}
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

      <Planet {...earth} focusOnPlanet={focusOnPlanet} />

      <Planet {...mars} focusOnPlanet={focusOnPlanet} />

      <Planet {...jupiter} focusOnPlanet={focusOnPlanet} />

      <Planet {...saturn} focusOnPlanet={focusOnPlanet} />

      <Planet {...uranus} focusOnPlanet={focusOnPlanet} />

      <Planet {...neptune} focusOnPlanet={focusOnPlanet} />

      <Planet {...pluto} focusOnPlanet={focusOnPlanet} />

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
