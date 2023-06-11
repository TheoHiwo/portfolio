import React from "react";
import { data } from "./data";

import { animated, config, useSpring } from "@react-spring/web";
import { useState } from "react";

import { useGesture } from "@use-gesture/react";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import { arcadeArcade } from "../Home/Home";

// return (
//   <section className="">

//    {data.textLong}
//   </section>
// );
// }

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <section className="w-full flex flex-col justify-between px-10 py-10 text-primary bg-secondary">
      <div className="flex flex-row justify-between mb-5">
        {/*/add image tori in right */}
        <h1 className={clsx("text-4xl self-center", arcadeArcade.className)}>About me</h1>
      </div>
        <div className=" flex flex-col gap-5 indent-5 text-lg tracking-wider ">
          <p>{data.p1.toUpperCase()}</p>
          <p>{data.p2.toUpperCase()}</p>
          <p>{data.p3.toUpperCase()}</p>
          <p>{data.p4.toUpperCase()}</p>
          <p>{data.p5.toUpperCase()}</p>
          <p className="text-center text-xl text-de">{data.p6.toUpperCase()}</p>
        </div>
      </section>
    </>
  );
}
