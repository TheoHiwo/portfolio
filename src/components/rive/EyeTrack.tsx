import { useRive, useStateMachineInput, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import React, { useEffect, useState } from "react";
import { useCanvasStore } from "../canvas/canvasStore";
/**
 * Inspired from:
 * https://rive.app/community/2440-4910-eye-tracking/
 */

const STATE_MACHINE = "LookAround";
export default function EyeTrack() {
  const { rive, RiveComponent } = useRive({
    src: "/momiji-kun.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE,
  });
  const mouseGrabbedInput = useStateMachineInput(rive, STATE_MACHINE, "mouseGrabbed");

  const isMouseGrabbed = useCanvasStore((state) => state.isMouseGrabbed);

  if (mouseGrabbedInput) {
    mouseGrabbedInput.value = isMouseGrabbed;
  }

  const [maxWidth, setMaxWidth] = useState<any>(null);
  const [maxHeight, setMaxHeight] = useState<any>(null);

  const xAxisInput = useStateMachineInput(rive, "LookAround", "xAxis", 50);
  const yAxisInput = useStateMachineInput(rive, "LookAround", "yAxis", 50);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setMaxWidth(bodyRect.right);
      setMaxHeight(bodyRect.bottom);
    }
  }, []);


  useEffect(() => {
    const update = (e) => {
      if (maxWidth && maxHeight && yAxisInput && xAxisInput) {
        xAxisInput.value = (e.x / maxWidth) * 100;
        yAxisInput.value = 100 - (e.y / maxHeight) * 100;
      }
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

  return <RiveComponent />;
}
