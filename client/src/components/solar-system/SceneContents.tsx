import { OrbitControls, Stars } from '@react-three/drei';
import {
  BufferGeometry,
  Line,
  LineBasicMaterial,
  Texture,
  Vector3,
} from 'three';

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
import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';

type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitSpeed: number;
  glowColor: number;
  color: string;
  semiMajorAxis: number;
  eccentricity: number;
};

const mercury: PlanetProps = {
  semiMajorAxis: 57.9,
  eccentricity: 0.2056,
  orbitSpeed: 0.2,
  oblateness: 1,
  radius: 2,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  color: mercuryColor,
};

function generateEllipseVertices(
  semiMajorAxis: number,
  eccentricity: number,
  segments: number,
) {
  const semiMinorAxis =
    semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i * 2 * Math.PI) / segments;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMinorAxis * Math.sin(angle);
    points.push(new Vector3(x, 0, y));
  }
  return points;
}

type OrbitPathProps = {
  semiMajorAxis: number;
  eccentricity: number;
  segments?: number;
};

const OrbitPath = ({
  semiMajorAxis,
  eccentricity,
  segments = 64,
}: OrbitPathProps) => {
  const points = useMemo(
    () => generateEllipseVertices(semiMajorAxis, eccentricity, segments),
    [semiMajorAxis, eccentricity, segments],
  );

  const lineGeometry = useMemo(
    () => new BufferGeometry().setFromPoints(points),
    [points],
  );
  const lineMaterial = useMemo(
    () => new LineBasicMaterial({ color: 0xffffff }),
    [],
  );

  // Use the 'primitive' component to render the Three.js Line object.
  return <primitive object={new Line(lineGeometry, lineMaterial)} />;
};

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls />
      <pointLight
        position={[0, 0, 0]}
        color={0xffffff}
        intensity={1500}
        distance={300}
      />
      <Sun />

      <Planet {...mercury} />

      <OrbitPath
        semiMajorAxis={mercury.semiMajorAxis}
        eccentricity={mercury.eccentricity}
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
