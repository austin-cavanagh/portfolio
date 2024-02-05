import { OrbitControls, Stars } from '@react-three/drei';
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

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls />

      <pointLight
        position={[0, 10, 80]}
        color={0xffffff}
        intensity={20000}
        distance={300}
      />

      {/* <Sun /> */}
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
