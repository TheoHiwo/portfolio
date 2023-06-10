"use client";

import { OrbitControls, PerspectiveCamera, Loader } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Momiji from "./Momiji";
import { Suspense } from "react";
import { Perf } from "r3f-perf";

const Debug = () => {
  const { width } = useThree((s) => s.size)
  return (
    <Perf
      minimal={true}
      matrixUpdate
      deepAnalyze
      overClock
      // customData={{
      //   value: 60,
      //   name: 'physic',
      //   info: 'fps'
      // }}
    />
  )
}

export default function Scene({ ...props }) {
  return (
    <>
    <Canvas {...props}>
        {/* <Debug /> */}
        <Momiji />
    </Canvas>
    <Loader />
    </>
  );
}

