import { OrbitControls, Stars } from '@react-three/drei';
import Sun from './Sun';
import Mercury from './Mercury';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Earth from './Earth';
import Jupiter from './Jupiter';
import Neptune from './Neptune';
import Pluto from './Pluto';
import Mars from './Mars';
import Venus from './Venus';
import Moon from './Moon';

function SceneContents() {
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <OrbitControls />

      <pointLight
        position={[0, 10, 80]}
        color={0xffffff}
        intensity={20000}
        distance={300}
      />

      {/* <Jupiter /> */}

      {/* <Earth /> */}

      <Sun />

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
