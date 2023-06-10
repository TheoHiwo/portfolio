import React, { useState } from "react";
import EyeTrack from "@/components/rive/EyeTrack";
import { animated, config, useSpring } from "@react-spring/web";
import { useGesture, useHover, useScroll } from "@use-gesture/react";

type Props = {};

export default function Contact({}: Props) {
  const [hovered, setHovered] = useState(false);

  const [springContact, apiContact] = useSpring(() => ({
    config: config.slow,
    opacity: hovered ? 0 : 1,
  }));

  const bind = useHover(({ hovering }) => {
    setHovered(hovering);
  });

  return (
    <div className=" h-[500px] text-primary bg-secondary ">
      <div className="flex justify-between align-center pt-10 px-10">
        <div className="h-20 w-20">
          <EyeTrack />
        </div>
        <a href="mailto:rara21400@gmail.com">
          <div
            //@ts-ignore
            {...bind()}
            className="flex flex-col justify-between items-center px-10"
          >
            <h1 className="text-6xl self-center" {...springContact}>
              CONTACT ME
            </h1>
            <h1 className="text-4xl">rara21400@gmail.com</h1>
          </div>
        </a>
        <div className="h-20 w-20">
          <EyeTrack />
        </div>
      </div>
    </div>
  );
}
