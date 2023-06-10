import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";
import { clamp } from "three/src/math/MathUtils";
import { constants, defaultStates, useCanvasStore } from "./canvasStore";
import { Vector2 } from "three";

const { RADIUS } = constants;
export default function MomijiMouse({ geometry, material }) {
  // console.log("Mouse");
  //store
  const mousePosition = useCanvasStore((state) => state.mousePosition);
  const centerMousePosition = defaultStates.mousePosition;
  const setMousePosition = useCanvasStore((state) => state.setMousePosition);
  const isMouseHovering = useCanvasStore((state) => state.isMouseHovered);
  const isMouseGrabbed = useCanvasStore((state) => state.isMouseGrabbed);
  const setIsMouseGrabbed = useCanvasStore((state) => state.setIsMouseGrabbed);
  const isMouseClicked = useCanvasStore((state) => state.isMouseClicked);
  const setIsMouseClicked = useCanvasStore((state) => state.setIsMouseClicked);

  const { raycaster } = useThree();
  const planeRef = useRef();
  const mouseVecPosition = new Vector2(defaultStates.mousePosition[0], defaultStates.mousePosition[2]);
  const mouseVecMove = new Vector2(0, 0);
  const [springMouse] = useSpring({
      position: mousePosition,
      config: { friction: 70 },
    },
    [mousePosition]
  );

  const bind = useGesture({
    onDrag: ({ active, tap, down }) => {
      setIsMouseGrabbed(true);

      document.body.style.cursor = down ? "grabbing" : "grab";
      const intersects = raycaster.intersectObjects([planeRef.current]);
      if (intersects.length > 0) {
        const intersection = intersects[0];
        const x = clamp(intersection.point.x, centerMousePosition[0] - RADIUS, centerMousePosition[0] + RADIUS);
        const z = clamp(intersection.point.z, centerMousePosition[2] - RADIUS, centerMousePosition[2] + RADIUS);
        setMousePosition(x, z);
        // setMousePosition(intersection.point.x, intersection.point.z);
      }
    },
    onDragEnd: ({ active }) => {
      setIsMouseGrabbed(false);
      document.body.style.cursor = "grab"
    },

    onHover: ({ active }) => {
      document.body.style.cursor = active ? "grab" : "auto";
    },
  });

  return (
    <>
      <mesh ref={planeRef} rotation-x={-Math.PI / 2} position={[0, 0, 0]} visible={false}>
        <planeGeometry args={[innerWidth, innerHeight]} />
      </mesh>
      <animated.mesh
        // {...spring}
        // @ts-ignore
        {...bind()}
        geometry={geometry}
        material={material}
        position={springMouse.position}
        // position={[5.27, 1.08, 6.74]}
        // position={[mousePosition.x, mousePosition.y, mousePosition.z]}
        rotation={[0, 0.44, 0]}
      />
    </>
  );
}
