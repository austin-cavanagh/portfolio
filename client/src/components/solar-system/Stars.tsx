import { Stars } from '@react-three/drei';

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.2} />
      {/* Other components like lights, planets, etc. */}
      <Stars
        radius={100} // Radius of the sphere that contains the stars
        depth={50} // Depth of the star field
        count={5000} // Number of stars
        factor={4} // Variability of star size
        saturation={0} // Color saturation
        fade // Fades the stars toward the horizon
      />
    </>
  );
}
