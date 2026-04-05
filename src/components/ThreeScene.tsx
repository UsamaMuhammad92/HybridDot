"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

/**
 * Animation tuning (all in useFrame in ThreeScene):
 * - ROTATION_SPEED_Y: Y-axis rotation (rad/s). Higher = faster spin.
 * - FLOAT_AMPLITUDE: up/down travel (units). Subtle = 0.06–0.1.
 * - FLOAT_SPEED: float cycle speed. Lower = slower (e.g. 0.4–0.8).
 */
const ROTATION_SPEED_Y = 0.12;
const FLOAT_AMPLITUDE = 0.08;
const FLOAT_SPEED = 0.6;

/**
 * Hero 3D scene: rotating + floating sphere, soft lighting, subtle shadow.
 * All animation runs in useFrame (rotation + floating) for 60fps sync.
 */
export function ThreeScene() {
  const meshRef = useRef<Mesh>(null);

  // All motion is here: Y rotation + vertical float (sine). Runs every frame.
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.getElapsedTime();
    mesh.rotation.y += ROTATION_SPEED_Y * state.clock.getDelta();
    mesh.position.y = Math.sin(t * FLOAT_SPEED) * FLOAT_AMPLITUDE;
  });

  return (
    <>
      {/* Lighting: ambient fill + directional key + point fill for depth */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} castShadow>
        <orthographicCamera attach="shadow-camera" args={[-2, 2, 2, -2, 0.5, 10]} />
      </directionalLight>
      <pointLight position={[-3, -3, -3]} intensity={0.5} />

      <mesh ref={meshRef} castShadow receiveShadow position={[0, 0, 0]}>
        <sphereGeometry args={[1.15, 48, 48]} />
        <meshPhysicalMaterial
          color="#e5e7eb"
          metalness={0.5}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.15}
          envMapIntensity={0.6}
        />
      </mesh>

      {/* Soft shadow plane below sphere so it reads as grounded */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <shadowMaterial opacity={0.12} />
      </mesh>
    </>
  );
}
