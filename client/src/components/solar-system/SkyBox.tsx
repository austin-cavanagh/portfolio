import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { CubeTextureLoader } from 'three';

import top from '../../assets/lightblue-skybox/top.png';
import bottom from '../../assets/lightblue-skybox/bottom.png';
import front from '../../assets/lightblue-skybox/front.png';
import right from '../../assets/lightblue-skybox/right.png';
import back from '../../assets/lightblue-skybox/back.png';
import left from '../../assets/lightblue-skybox/left.png';

function Skybox() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([right, left, top, bottom, front, back]);

    scene.background = texture;
  }, [scene]);

  return null;
}

export default Skybox;
