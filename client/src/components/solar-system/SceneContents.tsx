import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import sunColor from '../../assets/planets/sun/sun-color.jpg';
import mercuryColor from '../../assets/planets/sun/mercury-color.jpg';

function SceneContents() {
  //   const { camera, gl } = useThree(); // Access the camera and renderer (gl) from the context

  // Example animation logic (rotate a mesh, for example)
  //   useFrame((state, delta) => {
  //     // Your animation code here. This block is called every frame.
  //     // e.g., state.scene.children[0].rotation.y += delta * 0.1;
  //   });

  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls />

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

export default SceneContents;

{
  /* Optionally add stars for background, using drei's Stars component */
}
