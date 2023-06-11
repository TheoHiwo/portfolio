"use client";

import { OrbitControls, PerspectiveCamera, Loader, Html, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Momiji from "./Momiji";
import { Suspense, useEffect, useState } from "react";
import { Perf } from "r3f-perf";
import clsx from "clsx";
import { useCanvasStore } from "./canvasStore";

const Debug = () => {
  const { width } = useThree((s) => s.size);
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
  );
};

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  const setCursorText = useCanvasStore((state) => state.setCursorText);

  useEffect(() => {
    if (progress === 100) {
      onStarted();
    }
  }, [progress]);
  return (
    <div className={clsx(started && "hidden", !started && "block", "text-6xl text-red-500 fixed top-0 right-0 z-[100]")}>
      <div className="">{progress} % loaded</div>
    </div>
  );
};

export default function Scene({ ...props }) {
  const [start, setStart] = useState(false);
  return (
    <>
      <Canvas {...props}>
        {/* <Debug /> */}
        <Suspense fallback={null}>{start && <Momiji />}</Suspense>
      </Canvas>
      {/* <Loader /> */}
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
}
