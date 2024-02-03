import { OrbitControls, Stars } from '@react-three/drei';
import Sun from './Sun';
import Mercury from './Mercury';
import Saturn from './Saturn';

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls />

      {/* <pointLight
        position={[0, 0, 0]}
        color={0xffffff}
        intensity={20000}
        distance={300}
      /> */}

      {/* <Sun /> */}

      {/* <Mercury /> */}

      <Saturn />

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
