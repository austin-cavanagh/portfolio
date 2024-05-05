import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { CubeTexture, CubeTextureLoader } from 'three';

import top from '../../assets/lightblue-skybox/top.png';
import bottom from '../../assets/lightblue-skybox/bottom.png';
import front from '../../assets/lightblue-skybox/front.png';
import right from '../../assets/lightblue-skybox/right.png';
import back from '../../assets/lightblue-skybox/back.png';
import left from '../../assets/lightblue-skybox/left.png';

export default function Skybox() {
  const { scene } = useThree();

  useEffect(() => {
    try {
      // This will suspend if still loading
      const texture = skyboxTextures.read();
      scene.background = texture;
    } catch (error) {
      console.error('Failed to load skybox textures:', error);
    }
  }, [scene]);

  // This component does not render anything itself
  return <></>;
}

// Load textures for the skybox
const skyboxTextures = preloadTextures(
  new CubeTextureLoader().loadAsync([right, left, top, bottom, front, back]),
);

// Define the type for the function that creates a resource for loading textures
function preloadTextures(promise: Promise<CubeTexture>) {
  let status: 'loading' | 'success' | 'error' = 'loading';
  let result: CubeTexture | Error;

  let suspender = promise.then(
    (r: CubeTexture) => {
      status = 'success';
      result = r;
    },
    (e: Error) => {
      status = 'error';
      result = e;
    },
  );

  return {
    read(): CubeTexture {
      if (status === 'loading') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else {
        return result as CubeTexture;
      }
    },
  };
}
