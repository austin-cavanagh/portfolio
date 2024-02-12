import { OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SphereGeometry, Vector3 } from 'three';
import { AppDispatch, RootState } from '../../state/store';
import { PlanetContext } from '../../context/PlanetContext';
import { endTransition } from '../../state/appSlice';

import * as TWEEN from '@tweenjs/tween.js';

type CameraControllerProps = {};

const calculateBezierPoint = (
  t: number,
  start: Vector3,
  control: Vector3,
  end: Vector3,
) => {
  const invT = 1 - t;

  return start
    .clone()
    .multiplyScalar(invT * invT)
    .add(control.clone().multiplyScalar(2 * invT * t))
    .add(end.clone().multiplyScalar(t * t));
};

function CameraController({}: CameraControllerProps) {
  const orbitControlsRef = useRef<any>(null!);
  const transitionProgressRef = useRef<number>(0);

  const { camera } = useThree();

  const { currentPlanet, showContent, isTransitioning } = useSelector(
    (state: RootState) => state.app,
  );

  const dispatch = useDispatch<AppDispatch>();

  const { planetRefs } = useContext(PlanetContext);
  const currentPlanetRef = planetRefs[currentPlanet];

  useEffect(() => {
    if (!currentPlanetRef?.current) return;

    const planetRadius = currentPlanetRef.current.geometry.parameters.radius;
    const planetPosition = currentPlanetRef.current.position;
    const newPosition = planetPosition
      .clone()
      .add(new Vector3(planetRadius * 4, 0, 0));
    const newTarget = planetPosition;

    new TWEEN.Tween(camera.position)
      .to(newPosition, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        camera.updateProjectionMatrix();
      })
      .start();

    new TWEEN.Tween(orbitControlsRef.current.target)
      .to(newTarget, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        orbitControlsRef.current.update();
      })
      .start();
  }, [currentPlanet]);

  useEffect(() => {
    transitionProgressRef.current = 0;
  }, [currentPlanet]);

  useFrame(({}, delta) => {
    TWEEN.update();

    // if (currentPlanet === 'Overview') {
    //   // During Overview transition
    //   if (transitionProgressRef.current < 0.12) {
    //     const newCameraPosition = new Vector3(-750, 1000, 1500);
    //     const newTargetPosition = new Vector3(0, 0, 0);

    //     transitionProgressRef.current += delta * 0.04;

    //     camera.position.lerp(newCameraPosition, transitionProgressRef.current);

    //     orbitControlsRef.current.target.lerp(
    //       newTargetPosition,
    //       transitionProgressRef.current,
    //     );
    //   }

    //   // After Overview transition
    //   if (transitionProgressRef.current >= 0.12 && isTransitioning) {
    //     // console.log('done');

    //     dispatch(endTransition());
    //     // console.log('ended transition');
    //   }

    //   return;
    // }

    // const planetGeometry = currentPlanetRef.current.geometry as SphereGeometry;
    // const planetRadius = planetGeometry.parameters.radius;

    // // During planet transition
    // // Solution goes in this if statement
    // // if (currentPlanet && transitionProgressRef.current < 1) {
    // //   const start = camera.position.clone();

    // //   const planetPosition = currentPlanetRef.current.position;

    // //   currentPlanetRef.current.getWorldPosition(planetPosition);

    // //   const offsetEnd = planetPosition
    // //     .clone()
    // //     .add(new Vector3(0, 0, planetRadius * 6));

    // //   const dynamicHeightAdjustment =
    // //     transitionProgressRef.current < 0.5
    // //       ? (0.5 - transitionProgressRef.current) * 2
    // //       : transitionProgressRef.current - 0.5;

    // //   const controlPointHeight =
    // //     planetRadius + dynamicHeightAdjustment * planetRadius * 2;

    // //   const controlPoint = new Vector3(
    // //     (start.x + offsetEnd.x) / 2,
    // //     Math.max(start.y, offsetEnd.y) + controlPointHeight,
    // //     (start.z + offsetEnd.z) / 2,
    // //   );

    // //   const t = transitionProgressRef.current;
    // //   const bezierPoint = calculateBezierPoint(
    // //     t,
    // //     start,
    // //     controlPoint,
    // //     offsetEnd,
    // //   );

    // //   camera.position.lerp(bezierPoint, 0.1);
    // //   orbitControlsRef.current.target.lerp(planetPosition, t);

    // //   transitionProgressRef.current += delta * 0.25;
    // // }

    // // After planet transition
    // // if (currentPlanet && transitionProgressRef.current > 1) {
    // //   if (isTransitioning) dispatch(endTransition());

    // //   const planetPosition = new Vector3();
    // //   currentPlanetRef.current.getWorldPosition(planetPosition);
    // //   orbitControlsRef.current.target.lerp(planetPosition, 0.1);
    // //   const direction = new Vector3()
    // //     .subVectors(camera.position, planetPosition)
    // //     .normalize();

    // //   const distance = planetRadius * 6;
    // //   const desiredCameraPosition = new Vector3().addVectors(
    // //     planetPosition,
    // //     direction.multiplyScalar(distance),
    // //   );

    // //   if (showContent) {
    // //     camera.position.lerp(desiredCameraPosition, 0.05);
    // //   }
    // // }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      enablePan={false}
      enableZoom={!showContent && !isTransitioning}
      enableRotate={!showContent && !isTransitioning}
    />
  );
}

export default CameraController;
