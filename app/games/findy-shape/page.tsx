"use client";

import { arcadeArcade } from "@/components/dom/Home/Home";
import EyeTrack from "@/components/rive/EyeTrack";
import { toScreen } from "@/helpers/global";
import clsx from "clsx";
import Link from "next/link";

export default function FindyShape() {
  return (
    <main className="main-content z-0 flex-col py-12 px-5  w-full justify-center items-center text-secondary bg-primary touch-pan-y m-auto">
      <p>Work in progress</p>
      <div>Findy Shape game page presentation</div>
      <Link href="/games/findy-shape/privacy-policy">Privacy policy</Link>
    </main>
  );
}
