import React, { useState } from "react";
import EyeTrack from "@/components/rive/EyeTrack";
import { animated, config, useSpring } from "@react-spring/web";
import { useGesture, useHover, useScroll } from "@use-gesture/react";
import clsx from "clsx";
import { arcadeArcade } from "../Home/Home";
import { useCanvasStore } from "@/components/canvas/canvasStore";

type Props = {};


export default function Contact({}: Props) {
  const [hovered, setHovered] = useState(false);
  const setIsLeafHovered = useCanvasStore((state) => state.setIsLeafHovered);

  const [springContact, apiContact] = useSpring(() => ({
    config: config.slow,
    opacity: hovered ? 0 : 1,
  }));

  const bind = useHover(({ hovering }) => {
    setHovered(hovering);
  });

  return (
    <div className=" h-[700px] text-primary bg-secondary ">
      <div className="flex justify-between align-center pt-10 px-10">
        <div className="h-20 w-20">
          <EyeTrack />
        </div>
        <a href="mailto:rara21400@gmail.com">
          <div
            //@ts-ignore
            {...bind()}
            className="flex flex-col justify-between items-center text-clickable hover:text-hovered  py-4 px-5"
            onMouseEnter={() => setIsLeafHovered(true)}
            onMouseLeave={() => setIsLeafHovered(false)}
          >
            <h1 className={clsx("text-4xl self-center", arcadeArcade.className)} {...springContact}>
              CONTACT ME
            </h1>
            <h1 className="text-3xl">contact@theo-berraboukh.com</h1>
          </div>
        </a>
        <div className="h-20 w-20">
          <EyeTrack />
        </div>
      </div>
    </div>
  );
}
