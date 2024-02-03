import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import sunColor from '../../assets/planets/sun/sun-color.jpg';
import mercuryColor from '../../assets/planets/sun/mercury-color.jpg';
import Sun from './Sun';
import Mercury from './Mercury';

function SceneContents() {
  //   const { camera, gl } = useThree(); // Access the camera and renderer (gl) from the context

  // Example animation logic (rotate a mesh, for example)
  //   useFrame((state, delta) => {
  //     // Your animation code here. This block is called every frame.
  //     // e.g., state.scene.children[0].rotation.y += delta * 0.1;
  //   });

  // const mercuryGeo = new THREE.SphereGeometry(16, 30, 30);
  // const mercuryMat = new THREE.MeshBasicMaterial({
  //   map: TextureLoader.load(mercuryColor),
  // });
  // const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
  // sun.add(mercury);
  // mercury.position.x = 28

  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls />

      {/* Other components like lights, planets, etc. */}
      {/* test what the planets look like here after understanding orbiting */}
      <pointLight
        position={[0, 0, 0]}
        color={0xffffff}
        intensity={2}
        distance={300}
      />

      <Sun />
      <Mercury />

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

{
  /* Optionally add stars for background, using drei's Stars component */
}
