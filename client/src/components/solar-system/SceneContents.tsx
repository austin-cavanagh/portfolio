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
};

const mercury: PlanetProps = {
  semiMajorAxis: 57.9,
  eccentricity: 0.2056,
  orbitSpeed: 0.001,
  oblateness: 1,
  radius: 2,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  color: mercuryColor,
  name: 'Mercury',
};

const venus: PlanetProps = {
  semiMajorAxis: 108.2,
  eccentricity: 0.0067,
  orbitSpeed: 0.01,
  oblateness: 1,
  radius: 6.052,
  rotation: -0.001,
  glowColor: 0xffd700,
  color: venusColor,
  name: 'Venus',
};

const earth: PlanetProps = {
  semiMajorAxis: 149.6,
  eccentricity: 0.0167,
  orbitSpeed: 0.01,
  oblateness: 1,
  radius: 6.371,
  rotation: 0.00417,
  glowColor: 0x0088ff,
  color: earthColor,
  name: 'Earth',
};

const mars: PlanetProps = {
  semiMajorAxis: 227.9,
  eccentricity: 0.0934,
  orbitSpeed: 0.001,
  oblateness: 1,
  radius: 3.39,
  rotation: 0.00427,
  glowColor: 0xff4500,
  color: marsColor,
  name: 'Mars',
};

const jupiter: PlanetProps = {
  semiMajorAxis: 278.5,
  eccentricity: 0.0489,
  orbitSpeed: 0.00084,
  oblateness: 1.069,
  radius: 10,
  rotation: 0.001,
  glowColor: 0xffa500,
  color: jupiterColor,
  name: 'Jupiter',
};

const saturn: PlanetProps = {
  semiMajorAxis: 333,
  eccentricity: 0.0565,
  orbitSpeed: 0.034,
  oblateness: 1.083,
  radius: 8.232,
  rotation: 0.05,
  glowColor: 0xcba135,
  color: saturnColor,
  name: 'Saturn',
};

const uranus: PlanetProps = {
  semiMajorAxis: 402.5,
  eccentricity: 0.0463,
  orbitSpeed: 0.012,
  oblateness: 1.011,
  radius: 7.362,
  rotation: 0.72,
  glowColor: 0x1ec2a4,
  color: uranusColor,
  name: 'Uranus',
};

const neptune: PlanetProps = {
  semiMajorAxis: 502.5,
  eccentricity: 0.0463,
  orbitSpeed: 0.012,
  oblateness: 1.011,
  radius: 5.362,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: neptuneColor,
  name: 'Neptune',
};

const pluto: PlanetProps = {
  semiMajorAxis: 602.5,
  eccentricity: 0.0463,
  orbitSpeed: 0.012,
  oblateness: 1.011,
  radius: 2.362,
  rotation: 0.02,
  glowColor: 0x1ec2a4,
  color: plutoColor,
  name: 'Pluto',
};

function SceneContents() {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls />
      {/* <pointLight
        position={[0, 0, 0]}
        color={0xffffff}
        intensity={1500}
        distance={300}
      /> */}
      <Sun />

      {/* <Planet {...mercury} />
      <OrbitPath
        semiMajorAxis={mercury.semiMajorAxis}
        eccentricity={mercury.eccentricity}
      />

      <Planet {...venus} />
      <OrbitPath
        semiMajorAxis={venus.semiMajorAxis}
        eccentricity={venus.eccentricity}
      /> */}

      <Planet {...earth} />
      <OrbitPath
        semiMajorAxis={earth.semiMajorAxis}
        eccentricity={earth.eccentricity}
      />

      {/* <Planet {...mars} />
      <OrbitPath
        semiMajorAxis={mars.semiMajorAxis}
        eccentricity={mars.eccentricity}
      />

      <Planet {...jupiter} />
      <OrbitPath
        semiMajorAxis={jupiter.semiMajorAxis}
        eccentricity={jupiter.eccentricity}
      /> */}

      {/* <Planet {...saturn} />
      <OrbitPath
        semiMajorAxis={saturn.semiMajorAxis}
        eccentricity={saturn.eccentricity}
      /> */}

      {/* <Planet {...uranus} />
      <OrbitPath
        semiMajorAxis={uranus.semiMajorAxis}
        eccentricity={uranus.eccentricity}
      /> */}

      {/* <Planet {...neptune} />
      <OrbitPath
        semiMajorAxis={neptune.semiMajorAxis}
        eccentricity={neptune.eccentricity}
      /> */}

      {/* <Planet {...pluto} />
      <OrbitPath
        semiMajorAxis={pluto.semiMajorAxis}
        eccentricity={pluto.eccentricity}
      /> */}

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
