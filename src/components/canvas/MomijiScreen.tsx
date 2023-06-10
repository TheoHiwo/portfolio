import { toScreen } from "@/helpers/global";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";
import { Vector2 } from "three";
import { clamp, mapLinear } from "three/src/math/MathUtils";
import { constants, defaultStates, useCanvasStore } from "./canvasStore";

const { RADIUS } = constants;

export default function MomijiScreen({ geometry, material }) {
  // console.log("Screen");
  //store

  const centerMousePosition = defaultStates.mousePosition;
  const setMousePosition = useCanvasStore((state) => state.setMousePosition);
  const isMouseGrabbed = useCanvasStore((state) => state.isMouseGrabbed);
  const isFullScreen = useCanvasStore((state) => state.isFullScreen);
  const setIsFullScreen = useCanvasStore((state) => state.setIsFullScreen);
  const isScreenHovered = useCanvasStore((state) => state.isScreenHovered);
  const setIsScreenHovered = useCanvasStore((state) => state.setIsScreenHovered);
  const isScreenOccluded = useCanvasStore((state) => state.isScreenOccluded);
  const setIsScreenOccluded = useCanvasStore((state) => state.setIsScreenOccluded);

  
  
  const { raycaster } = useThree();
  const mouseUV = useRef(new Vector2(0.5, 0.5));
  const refScreen = useRef(null);

  function moveMousefromScreen(hovering, event){
    if (!isMouseGrabbed || isScreenOccluded) {
      setIsScreenHovered(hovering);

      //@ts-ignore
      mouseUV.current.x = filterValues(event.uv.x, mouseUV.current.x);
      //@ts-ignore
      mouseUV.current.y = filterValues(event.uv.y, mouseUV.current.y);
      
      const mousePosX = mapLinear(
        mouseUV.current.x,
        0,
        1,
        centerMousePosition[0] - RADIUS,
        centerMousePosition[0] + RADIUS
      );
      const mousePosZ = mapLinear(
        mouseUV.current.y,
        0,
        1,
        centerMousePosition[2] + RADIUS,
        centerMousePosition[2] - RADIUS
      );

      setMousePosition(mousePosX, mousePosZ);
  }
  }



  const bind = useGesture({
    onMove: ({ hovering, event }) => {
      moveMousefromScreen(hovering, event)
    },
    onClick: ({ hovering, event }) => {
      moveMousefromScreen(hovering, event)
    },
    
    // onDoubleClick: ({ event}) => {
    //   setIsFullScreen(!isFullScreen);
    // },
  });

  return (
    <Html
      // @ts-ignore
      {...bind()}
      as="div"
      zIndexRange={[49, 0]} 
      className="content"
      position={[-0.76, 5.2, 2.2]}
      rotation={[-0.31, 0.15, -0.11]}
      occlude="blending"
      transform
    >
      <toScreen.Out />
    </Html>
  );
}

function filterValues(value, prev) {
  if (value >= 0.1 && value <= 0.9) {
    return value;
  } else { return prev;}
}