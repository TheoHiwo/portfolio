"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MomijiNetwork from "./MomijiNetwork";

export default function Scene({
  ...props
}) {
  return (
    <Canvas {...props}>
      <OrbitControls />
      <ambientLight />
      <pointLight
        position={[10, 10, 10]}
      />
      <MomijiNetwork />
    </Canvas>
  );
}
