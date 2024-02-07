import { OrbitControls, Stars } from '@react-three/drei';
import OrbitPath from './OrbitPath';
import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

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

import earthColor from '../../assets/planets/earth/earth-color-2k.jpg';
import earthBump from '../../assets/planets/earth/earth-bump-2k.jpg';

import marsColor from '../../assets/planets/mars/mars-color-2k.jpg';
import marsBump from '../../assets/planets/mars/mars-bump-2k.jpg';

import jupiterColor from '../../assets/planets/jupiter/jupiter-color-2k.jpg';

import saturnColor from '../../assets/planets/saturn/saturn-color-2k.jpg';
import saturnRingColor from '../../assets/planets/saturn/saturn-ring-color.jpg';
import saturnRingPattern from '../../assets/planets/saturn/saturn-ring-pattern.gif';

import uranusColor from '../../assets/planets/uranus/uranus-color-2k.jpg';
import uranusRingColor from '../../assets/planets/uranus/uranus-ring-color.jpg';
import uranusRingPattern from '../../assets/planets/uranus/uranus-ring-pattern.gif';

import neptuneColor from '../../assets/planets/neptune/neptune-color-2k.jpg';

import plutoColor from '../../assets/planets/pluto/pluto-color-2k.jpg';
import plutoBump from '../../assets/planets/pluto/pluto-bump-2k.jpg';

export type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  colorMap: string;
  semiMajorAxis: number;
  eccentricity: number;
  name: string;
  orbitCenter?: { x: number; y: number; z: number };
  selectPlanet?: (planetMesh: Mesh) => void;
  selectedPlanet?: any;
  bumpMap?: string;
  ringColor?: string;
  ringPattern?: string;
  ringRadius?: number;
  ringTubeRadius?: number;
};

const mercury: PlanetProps = {
  radius: 5,
  semiMajorAxis: 100,
  eccentricity: 0.2056,

  orbitSpeed: 0.1,
  oblateness: 1,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  colorMap: mercuryColor,
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
  colorMap: venusColor,
  name: 'Venus',
  bumpMap: earthBump,
};

const earth: PlanetProps = {
  radius: 11,
  semiMajorAxis: 300,
  eccentricity: 0.0167,

  orbitSpeed: 0.01,
  oblateness: 1,
  rotation: 0.00417,
  glowColor: 0x0088ff,
  colorMap: earthColor,
  name: 'Earth',
  bumpMap: earthBump,
};

const mars: PlanetProps = {
  radius: 8,
  semiMajorAxis: 450,
  eccentricity: 0.0935,

  orbitSpeed: 0.001,
  oblateness: 1,
  rotation: 0.00427,
  glowColor: 0xff4500,
  colorMap: marsColor,
  name: 'Mars',
  bumpMap: marsBump,
};

const jupiter: PlanetProps = {
  radius: 20,
  semiMajorAxis: 620,
  eccentricity: 0.0489,

  orbitSpeed: 0.00084,
  oblateness: 1.069,
  rotation: 0.001,
  glowColor: 0xffa500,
  colorMap: jupiterColor,
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
  colorMap: saturnColor,
  name: 'Saturn',

  ringColor: saturnRingColor,
  ringPattern: saturnRingPattern,
  ringRadius: 27,
  ringTubeRadius: 6,
};

const uranus: PlanetProps = {
  radius: 10,
  semiMajorAxis: 970,
  eccentricity: 0.0457,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.01,
  glowColor: 0x1ec2a4,
  colorMap: uranusColor,
  name: 'Uranus',

  ringColor: uranusRingColor,
  ringPattern: uranusRingPattern,
  ringRadius: 20,
  ringTubeRadius: 2,
};

const neptune: PlanetProps = {
  radius: 10,
  semiMajorAxis: 1100,
  eccentricity: 0.0113,

  orbitSpeed: 0.012,
  oblateness: 1.011,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  colorMap: neptuneColor,
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
  colorMap: plutoColor,
  name: 'Pluto',
  bumpMap: plutoBump,
};

function SceneContents() {
  const orbitControlsRef = useRef<any>(null!);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const progressRef = useRef<number>(0);

  const camera = useThree().camera;

  const selectPlanet = (planetRef: any) => {
    if (selectedPlanet === planetRef) return;

    console.log(planetRef.current.geometry.parameters.radius);

    progressRef.current = 0;

    setSelectedPlanet(planetRef);
  };

  // Defines a function to calculate a point on a quadratic Bezier curve given a fraction of time t, start point, control point, and end point
  const calculateBezierPoint = (t, start, control, end) => {
    // invT is the inverse of t, representing the remaining fraction of the curve to traverse
    const invT = 1 - t;

    return start
      .clone()
      .multiplyScalar(invT * invT)
      .add(control.clone().multiplyScalar(2 * invT * t))
      .add(end.clone().multiplyScalar(t * t));
  };

  // Called every frame to update the animation
  useFrame((_, delta) => {
    // Handle transition when new planet is seleted
    if (selectedPlanet && progressRef.current < 1) {
      // Radius of the selected planet
      const planetRadius = selectedPlanet.current.geometry.parameters.radius;

      // Clones the current camera position to use as the starting point for the Bezier curve
      const start = camera.position.clone();
      // Initializes new vector to store the selected planet's position
      const planetPosition = new Vector3();
      // Retrieves the world position of the selected planet and stores it in planetPosition
      selectedPlanet.current.getWorldPosition(planetPosition);

      // Calculates an offset end position based on the planet's radius to ensure the camera ends up a specific distance away
      const offsetEnd = planetPosition
        .clone()
        .add(
          new Vector3(
            0,
            0,
            selectedPlanet.current.geometry.parameters.radius * 4,
          ),
        );

      // Dynamic height adjustment to make the curve steeper at the start and less steep at the end
      const dynamicHeightAdjustment =
        progressRef.current < 0.5
          ? (0.5 - progressRef.current) * 2 // Increase impact at the start
          : progressRef.current - 0.5; // Decrease impact towards the end

      // Adjust these numbers to tweak steepness
      const controlPointHeight =
        planetRadius + dynamicHeightAdjustment * planetRadius * 2;

      const controlPoint = new Vector3(
        (start.x + offsetEnd.x) / 2,
        Math.max(start.y, offsetEnd.y) + controlPointHeight,
        (start.z + offsetEnd.z) / 2,
      );

      const t = progressRef.current;

      const bezierPoint = calculateBezierPoint(
        t,
        start,
        controlPoint,
        offsetEnd,
      );

      camera.position.lerp(bezierPoint, 0.1);

      orbitControlsRef.current.target.lerp(planetPosition, t);

      progressRef.current += delta * 0.25;

      console.log(progressRef);
    }

    // Handles staying with selected planet after transition
    if (selectedPlanet && progressRef.current > 1) {
      const planetPosition = new Vector3();
      const planetRadius = selectedPlanet.current.geometry.parameters.radius;

      selectedPlanet.current.getWorldPosition(planetPosition);

      orbitControlsRef.current.target.lerp(planetPosition, 0.1);

      const direction = new Vector3()
        .subVectors(camera.position, planetPosition)
        .normalize();

      const distance = planetRadius * 6;

      const desiredCameraPosition = new Vector3().addVectors(
        planetPosition,
        direction.multiplyScalar(distance),
      );

      camera.position.lerp(desiredCameraPosition, 0.05);
    }
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

      <Planet
        {...mercury}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...venus}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...earth}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...mars}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...jupiter}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...saturn}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...uranus}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...neptune}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

      <Planet
        {...pluto}
        selectPlanet={selectPlanet}
        selectedPlanet={selectedPlanet}
      />

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
    </>
  );
}

export default SceneContents;
