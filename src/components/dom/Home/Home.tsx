import React from "react";
import EyeTrack from "@/components/rive/EyeTrack";
import { animated, config, useSpring } from "@react-spring/web";
import { useGesture, useScroll } from "@use-gesture/react";

type Props = {};

//todo add link to project and about section bellow
//create a pureRef
export default function Home({}: Props) {
  return (
    <div
      //@ts-ignore
      // {...bind()}
      className="h-full w-full flex flex-col justify-between items-center px-10 text-secondary bg-primary overflow-hidden"
    >
      <div className="w-full text-base tracking-wide px-1 text-center">
        momiji connected successfully in 1301.96years (8 branches)
      </div>

      <div className="text-center m-auto text-7xl tracking-widest">
        <h1 className="">THEO</h1>
        <h1 className="">BERRABOUKH</h1>
        <div className="h-1/2">
          <EyeTrack />
        </div>
      </div>
      <h1 className="text-3xl  text-center mb-12">Creative Coder. Frontend Developer.</h1>

    </div>
  );
}
