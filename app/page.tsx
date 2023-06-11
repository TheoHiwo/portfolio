"use client";

import { toScreen } from "@/helpers/global";
import dynamic from "next/dynamic";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGesture, useScroll } from "@use-gesture/react";
import { useCanvasStore } from "@/components/canvas/canvasStore";

import Home from "@/components/dom/Home/Home";
import Projects from "@/components/dom/Projects/Projects";
import ProjectsDesign from "@/components/dom/Projects/ProjectsDesign";
import About from "@/components/dom/About/About";
import Contact from "@/components/dom/Contact/Contact";

// const Home = dynamic(() => import("@/components/dom/Home/Home"), {
//   loading: () => <p>Loading...</p>,
// });
// const Projects = dynamic(() => import("@/components/dom/Projects/Projects"), {
//   loading: () => <p>Loading...</p>,
// });
// const ProjectsDesign = dynamic(() => import("@/components/dom/Projects/ProjectsDesign"), {
//   loading: () => <p>Loading...</p>,
// });

// const About = dynamic(() => import("@/components/dom/About/About"), {
//   loading: () => <p>Loading...</p>,
// });

// const Contact = dynamic(() => import("@/components/dom/Contact/Contact"), {
//   loading: () => <p>Loading...</p>,
// });

const NUM_PAGES = 4;
//h-full/NUM_PAGES = height of a parallax layer in % = 457px
const PAGE_HEIGHT = 100 / NUM_PAGES + "%";
const LAYER = { width: "100%", height: "457px" };
// outline-screen
export default function Single() {
  const progressScreen = useCanvasStore((state) => state.progressScreen);
  const setProgressScreen = useCanvasStore((state) => state.setProgressScreen);
  const sectionNumber = useCanvasStore((state) => state.sectionNumber);
  
  const setCursorTextVisible = useCanvasStore((state) => state.setCursorTextVisible);
  const parallax = useRef<IParallax>(null!);
  
  const scrollToOffset = (offset: number) => {
    if (parallax.current) parallax.current.scrollTo(offset);
  };



  // error Cannot read properties of null (reading 'container')
  // useScroll(
  //   ({ xy: [, y] }) => {
  //     // setProgressScreen(y / scrollContainerRef.current.scrollHeight)
  //     console.log("scroll");
  //   },
  //   {
  //     target: parallax.current.container.current,
  //   }
  // );

  useEffect(() => {
    if (sectionNumber) {
      const offset = sectionNumberToOffset(sectionNumber);
      scrollToOffset(offset);
      // console.log(`scroll to ${sectionNumber} at ${offset}`	)
    }
  }, [sectionNumber])
// console.log(`sectionNumber updated ${sectionNumber}`)
  return (
    <>
      <toScreen.In>
        <div
          // @ts-ignore
          // {...bind()}
          className="main-content z-0 h-full flex-col text-3xl justify-center items-center text-secondary bg-primary touch-pan-y "
        >
          <Parallax pages={NUM_PAGES} ref={parallax} className="">
            <ParallaxLayer offset={0} speed={0} style={LAYER} className="" 
            // onPointerDown={() => setCursorTextVisible(true)}
            >
              <Home />
            </ParallaxLayer>

            <ParallaxLayer  offset={1} speed={0.75} style={{ ...LAYER, marginBottom: "20px" }}
            // onPointerDown={() => setCursorTextVisible(false)}
            >
              <Projects scrollToOffset={scrollToOffset} />

              <ProjectsDesign scrollToOffset={scrollToOffset} />

              <About />
              <Contact />
            </ParallaxLayer>
          </Parallax>
        </div>
      </toScreen.In>
    </>
  );
}

function sectionNumberToOffset(sectionNumber) {
  const floored = Math.floor(sectionNumber);
  console.log('🔳 , floored:', floored)
  switch (floored) {
    case 1:
      return 0;   
      break;
    case 2:
      return 1;
      break;
    case 3:
      return 2.16;
      break;
    case 4:
      return 3;
      break;
  }
}