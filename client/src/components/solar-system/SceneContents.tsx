import { OrbitControls, Stars } from '@react-three/drei';
import { Texture } from 'three';

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

type PlanetProps = {
  radius: number;
  rotation: number;
  oblateness: number;
  orbitRadius: number;
  orbitSpeed: number;
  glowColor: number;
  color: string;
};

const mercury: PlanetProps = {
  orbitRadius: 20,
  orbitSpeed: 0.2,
  oblateness: 1,
  radius: 2,
  rotation: 0.001,
  glowColor: 0xb3cde0,
  color: mercuryColor,
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
