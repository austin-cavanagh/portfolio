import { useEffect, useRef, useState } from 'react';
import { ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import {
  CanvasTexture,
  Mesh,
  Sprite,
  SpriteMaterial,
  TextureLoader,
  Vector3,
} from 'three';
import getFresnelMat from '../../functions/getFresnelMat';
import { PlanetProps } from './SceneContents';
import { Text } from '@react-three/drei';

function Planet({
  radius,
  rotation,
  oblateness,
  orbitSpeed,
  glowColor,
  color,
  semiMajorAxis,
  eccentricity,
  name,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);
  const textRef = useRef<any>(null!);
  const textSpriteRef = useRef(null);

  const ring1Ref = useRef<Mesh>(null!);
  const ring2Ref = useRef<Mesh>(null!);
  const ring3Ref = useRef<Mesh>(null!);

  const [hovered, setHovered] = useState(false);

  const colorTexture = useLoader(TextureLoader, color);

  useEffect(() => {
    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256; // Adjust as needed
    canvas.height = 64; // Adjust as needed

    // Style your text
    context.fillStyle = '#FFFFFF'; // Text color
    context.font = 'Bold 20px Arial'; // Adjust font style as needed
    context.fillText(name, 30, 40); // Adjust text position as needed

    // Create texture from canvas
    const texture = new CanvasTexture(canvas);

    // Create sprite material with this texture
    const material = new SpriteMaterial({
      map: texture,
      sizeAttenuation: false, // This ensures the sprite's size remains constant on screen
    });
    // Assign material to sprite
    textSpriteRef.current.material = material;

    // Adjust sprite scale here if needed
    textSpriteRef.current.scale.set(0.2, 0.05, 1); // Scale values might need adjustment
  }, [name]);

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();

    const c = semiMajorAxis * eccentricity;
    const angle = elapsedTime * orbitSpeed;

    const x = semiMajorAxis * Math.cos(angle) - c;
    const z =
      semiMajorAxis *
      Math.sqrt(1 - eccentricity * eccentricity) *
      Math.sin(angle);

    if (planetRef.current) {
      planetRef.current.rotation.y += rotation;
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }

    if (glowRef.current) {
      glowRef.current.position.x = x;
      glowRef.current.position.z = z;
    }

    if (ring1Ref.current) {
      ring1Ref.current.position.x = x;
      ring1Ref.current.position.z = z;
      ring1Ref.current.rotation.x += 0.0095;
      ring1Ref.current.rotation.y += 0.0095;
    }

    if (ring2Ref.current) {
      ring2Ref.current.position.x = x;
      ring2Ref.current.position.z = z;
      ring2Ref.current.rotation.y += 0.009;
    }

    if (ring3Ref.current) {
      ring3Ref.current.position.x = x;
      ring3Ref.current.position.z = z;
      ring3Ref.current.rotation.x += 0.009;
    }

    if (textRef.current && planetRef.current) {
      // Direction from the planet to the camera
      const toCameraDir = new Vector3()
        .subVectors(camera.position, planetRef.current.position)
        .normalize();

      // "Up" direction in world space (assuming Y is up)
      const upDir = new Vector3(0, 1, 0);

      // Correct the left direction calculation by swapping the order in the cross product
      const leftDir = new Vector3()
        .crossVectors(toCameraDir, upDir)
        .normalize();

      // Set the text position to the left of the planet by using the "leftDir" vector
      const offsetDistance = radius * 2; // Adjust based on how far left you want the text to be
      textRef.current.position
        .copy(planetRef.current.position)
        .add(leftDir.multiplyScalar(offsetDistance));

      // Calculate the scale factor to make the text appear the same size on screen

      // Make the text always face the camera
      textRef.current.lookAt(camera.position);
    }

    if (textSpriteRef.current) {
      const offsetDistance = radius * 1.5; // Distance from planet to text
      const dirVector = new Vector3()
        .subVectors(camera.position, planetRef.current.position)
        .normalize();
      const leftDir = new Vector3(-dirVector.z, 0, dirVector.x).normalize();
      textSpriteRef.current.position
        .copy(planetRef.current.position)
        .add(leftDir.multiplyScalar(offsetDistance));
      //   textSpriteRef.current.lookAt(camera.position);
    }
  });

  const fresnelMaterialProps = getFresnelMat({
    rimHex: glowColor,
    facingHex: 0x000000,
  });

  const onPointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const onPointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        ref={planetRef}
        scale={[1, oblateness, 1]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <sphereGeometry args={[radius, 50, 50]} />
        <meshPhongMaterial map={colorTexture} />
      </mesh>

      <mesh ref={glowRef} scale={[1.005, 1.005 * oblateness, 1.005]}>
        <icosahedronGeometry args={[radius, 16]} />
        <shaderMaterial
          attach="material"
          {...fresnelMaterialProps}
          transparent
        />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} visible={hovered}>
        <torusGeometry args={[radius * 1.5, 0.12, 2, 50]} />
        <meshBasicMaterial color={0x00bfff} />
      </mesh>

      {/* <Text
        ref={textRef}
        fontSize={5}
        color="#00bfff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text> */}

      <sprite ref={textSpriteRef} />
    </>
  );
}

export default Planet;
