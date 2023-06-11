"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useThree } from "@react-three/fiber";
import NavBar from "./NavBar/NavBar";
import { Cursor } from "./Cursor";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

const Layout = ({ children }: { children: any }) => {
  const parentRef = useRef(null);

  return (
    <>
      <NavBar/>
      <Cursor/>
      <div
        ref={parentRef}
        style={{
          position: "relative",
          width: " 100%",
          height: "100%",
          overflow: "auto",
          // touchAction: "auto",
        }}
        // className="touch-pan-x"
      >
        {/* app dir */}
        {children}
        <Scene
          style={{
            zIndex: "28",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          eventSource={parentRef}
          eventPrefix="client"
        />
      </div>
    </>
  );
};

export { Layout };
