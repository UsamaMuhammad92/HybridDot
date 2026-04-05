"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

export interface SceneCanvasProps {
  children: React.ReactNode;
  className?: string;
  /** Optional: pass custom Canvas props (camera, gl, etc.) */
  canvasProps?: Record<string, unknown>;
}

/**
 * Wrapper for React Three Fiber Canvas. Use this to add 3D scenes to pages.
 * Canvas is loaded only on the client (ssr: false) to avoid Three.js SSR issues.
 * Wrap your R3F scene children in Suspense if they use loaders (e.g. useLoader).
 *
 * Example:
 * <SceneCanvas>
 *   <Suspense fallback={null}>
 *     <Your3DScene />
 *   </Suspense>
 * </SceneCanvas>
 */
export function SceneCanvas({ children, className, canvasProps }: SceneCanvasProps) {
  return (
    <div className={className} style={{ position: "relative", width: "100%", minHeight: 200 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        {...canvasProps}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
