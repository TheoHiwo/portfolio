import { Rive } from "@rive-app/canvas";
import { useLayoutEffect, useRef } from "react";
export const CANVAS_SIZE = 512;

const RIV_NAME = "mixing";
const ARTBOARD = "New Artboard";
const STATE_MACHINE = "State Machine 1";
const ANIMATION = "Beginner";
export default function useRiveTexture() {
  const canvasRef = useRef(document.createElement("canvas"));

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const instance = new Rive({
      src: "/rive/" + RIV_NAME + ".riv",
      canvas: canvas,
      autoplay: true,
      stateMachines: STATE_MACHINE,
    });

    return () => {
      instance.cleanup();
    };
  }, []);
  return canvasRef;
}
