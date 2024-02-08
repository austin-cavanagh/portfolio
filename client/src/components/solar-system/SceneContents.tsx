import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, SphereGeometry, Vector3 } from 'three';

import Sun from './Sun';
import Planet from './Planet';
import { planets } from '../../data/planets';

function SceneContents() {
  const orbitControlsRef = useRef<any>(null!);
  const [selectedPlanet, setSelectedPlanet] =
    useState<React.RefObject<Mesh> | null>(null);
  const progressRef = useRef<number>(0);

  const [showContent, setShowContent] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const selectPlanet = (planetRef: React.RefObject<Mesh>) => {
    if (selectedPlanet === planetRef) return;
    progressRef.current = 0;
    setSelectedPlanet(planetRef);
    setIsTransitioning(true);
  };

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

  useFrame(({ camera }, delta) => {
    if (!selectedPlanet) return;

    const planetGeometry = selectedPlanet?.current?.geometry as SphereGeometry;
    const planetRadius = planetGeometry.parameters.radius;

    if (selectedPlanet && progressRef.current < 1) {
      const start = camera.position.clone();
      const planetPosition = new Vector3();
      selectedPlanet.current?.getWorldPosition(planetPosition);

      const offsetEnd = planetPosition
        .clone()
        .add(new Vector3(0, 0, planetRadius * 4));

      const dynamicHeightAdjustment =
        progressRef.current < 0.5
          ? (0.5 - progressRef.current) * 2
          : progressRef.current - 0.5;

      const controlPointHeight =
        planetRadius + dynamicHeightAdjustment * planetRadius * 2;

      const controlPoint = new Vector3(
        (start.x + offsetEnd.x) / 2,
        Math.max(start.y, offsetEnd.y) + controlPointHeight,
        (start.z + offsetEnd.z) / 2,
      );

      const t = progressRef.current;
      const bezierPoint = calculateBezierPoint(
        t,
        start,
        controlPoint,
        offsetEnd,
      );

      camera.position.lerp(bezierPoint, 0.1);
      orbitControlsRef.current.target.lerp(planetPosition, t);
      progressRef.current += delta * 0.25;
    }

    if (selectedPlanet && progressRef.current > 1) {
      setIsTransitioning(false);

      const planetPosition = new Vector3();
      selectedPlanet.current?.getWorldPosition(planetPosition);
      orbitControlsRef.current.target.lerp(planetPosition, 0.1);
      const direction = new Vector3()
        .subVectors(camera.position, planetPosition)
        .normalize();

      const distance = planetRadius * 6;
      const desiredCameraPosition = new Vector3().addVectors(
        planetPosition,
        direction.multiplyScalar(distance),
      );

      if (showContent) {
        camera.position.lerp(desiredCameraPosition, 0.05);
      }
    }
  });

  return (
    <>
      <ambientLight intensity={2.5} />

      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={!showContent && !isTransitioning}
        enableRotate={!isTransitioning}
      />

      <Sun />

      {planets.map((planet, index) => {
        return (
          <Planet
            {...planet}
            selectPlanet={selectPlanet}
            selectedPlanet={selectedPlanet}
            key={index}
          />
        );
      })}
    </>
  );
}

export default SceneContents;
