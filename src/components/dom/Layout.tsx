"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useThree } from "@react-three/fiber";
import NavBar from "./NavBar/NavBar";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

const Layout = ({ children }: { children: any }) => {
  const parentRef = useRef(null);

  return (
    <>
      <NavBar/>
      <div
        ref={parentRef}
        style={{
          position: "relative",
          width: " 100%",
          height: "100%",
          overflow: "auto",
          touchAction: "auto",
        }}
      >
        {/* app dir */}
        {/* <div style={{ position: "fixed", top: 0, left: 0, userSelect: "none" }}> */}
        {children}
        {/* </div> */}
        <Scene
          style={{
            zIndex: "48",
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
