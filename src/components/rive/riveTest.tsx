import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useRiveStore } from "./riveStore";
import { useEffect, useRef, useState } from "react";
import { Rive } from "@rive-app/canvas";

const RIV_NAME = "mixing";
const ARTBOARD = "New Artboard";
const STATE_MACHINE = "State Machine 1";
const ANIMATION = "Beginner";
const CANVAS_SIZE = 512;
export default function RiveTest() {
  console.log("🔳 , file: riveTest.tsx:16 , RiveTest , RiveTest:", RiveTest);

  const { rive, RiveComponent, canvas, setCanvasRef, setContainerRef  } =
    useRive({
      src: "/rive/" + RIV_NAME + ".riv",
      artboard: ARTBOARD,
      stateMachines: STATE_MACHINE,
      // animations: ANIMATION,
      autoplay: true,
    });

    const level = useRiveStore(
      (state) => state.level
    );
  const levelInput =
    useStateMachineInput(
      rive,
      STATE_MACHINE,
      "level",
      0,
    );

    if (levelInput) {
      levelInput.value = level;
    }

  return (
    <RiveComponent/>
  );
}
