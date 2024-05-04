import { OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Vector3 } from 'three';
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
    // if (!currentPlanetRef?.current) return;

    const startY = camera.position.y;

    let path = '';
    if (startY < 100 && currentPlanet === 'Overview') {
      path = 'planetToOverview';
    }

    if (startY > 100 && currentPlanet !== 'Overview') {
      path = 'overviewToPlanet';
    }

    if (startY < 100 && currentPlanet !== 'Overview') {
      path = 'planetToPlanet';
    }

    // seperated logic

    const startPosition = camera.position;
    const startTarget = orbitControlsRef.current.target;

    // Slow Start -> Fast End
    if (path === 'planetToOverview') {
      const endTarget = new Vector3(0, 0, 0); // Position of the new planet
      const endPosition = new Vector3(-750, 1000, 1500); // End position of the camera

      // Position Transition
      new TWEEN.Tween(startPosition)
        .to(endPosition, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => camera.updateProjectionMatrix())
        .onComplete(() => {
          dispatch(endTransition());
        })
        .start();

      // Target Transition
      new TWEEN.Tween(startTarget)
        .to(endTarget, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => orbitControlsRef.current.update())
        .start();
    }

    if (!currentPlanetRef?.current) return;

    let planetRadius;
    let endPosition: any;
    let endTarget: any;

    // I need special logic becuase the camera does not need to be calculated for the sun
    // Instead of trying to get the sun on the left if we are going to the sun we just need to offset along the z axis
    // Did not have to do this for overview because we are not orienting based on planet

    if (currentPlanet === 'Sun') {
      planetRadius = planetRefs['Sun'].current.geometry.parameters.radius;
      endTarget = new Vector3(0, 0, 0);
      endPosition = new Vector3(0, 0, planetRadius * 4);
    }

    if (currentPlanet !== 'Sun') {
      planetRadius = currentPlanetRef.current.geometry.parameters.radius;
      endTarget = currentPlanetRef.current.position.clone();

      const sunToPlanetVector = endTarget
        .clone()
        .sub(new Vector3(0, 0, 0))
        .normalize();

      const sideDirection = new Vector3()
        .crossVectors(sunToPlanetVector, new Vector3(0, 1, 0))
        .normalize();

      endPosition = endTarget
        .clone()
        .add(sideDirection.multiplyScalar(planetRadius * 4))
        .add(new Vector3(0, planetRadius * 0.5, 0)); // Adjust Y position upwards
    }

    // Fast Start -> Slow End
    if (path === 'overviewToPlanet') {
      // Position Transition
      new TWEEN.Tween(startPosition)
        .to(endPosition, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => camera.updateProjectionMatrix())
        .onComplete(() => {
          dispatch(endTransition());
        })
        .start();

      // Target Transition
      new TWEEN.Tween(startTarget)
        .to(endTarget, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => orbitControlsRef.current.update())
        .start();
    }

    // Slow Start -> Slow End
    if (path === 'planetToPlanet') {
      const midPoint = startPosition.clone().lerp(endTarget, 0.5);
      const arcHeight = planetRadius * 10;
      const controlPoint = new Vector3(
        midPoint.x,
        midPoint.y + arcHeight,
        midPoint.z,
      );

      // Position Transition
      new TWEEN.Tween({ t: 0 })
        .to({ t: 1 }, 2000)
        .onUpdate(({ t }) => {
          const bezierPoint = calculateBezierPoint(
            t,
            startPosition,
            controlPoint,
            endPosition,
          );
          camera.position.copy(bezierPoint);
        })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      // Target Transition
      new TWEEN.Tween({ t: 0 })
        .to({ t: 1 }, 2000)
        .onUpdate(({ t }) => {
          const newTarget = startTarget.clone().lerp(endTarget, t);
          orbitControlsRef.current.target.copy(newTarget);
          orbitControlsRef.current.update();
        })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          dispatch(endTransition());
        })
        .start();
    }
  }, [currentPlanet]);

  useEffect(() => {
    transitionProgressRef.current = 0;
  }, [currentPlanet]);

  useFrame(({}) => {
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
