import { useCanvasStore } from "@/components/canvas/canvasStore";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import React from "react";

type Props = {};

const navElements = ["HOME", "PROJECTS", "ABOUT ME", "CONTACT"];

export default function NavBar({}: Props) {
  const [hovered, setHovered] = React.useState(false);
  const sectionNumber = useCanvasStore((state) => state.sectionNumber);
  const setSectionNumber = useCanvasStore((state) => state.setSectionNumber);

  const [springButton, apiButton] = useSpring(() => ({
    // text-underline-offset: 1px;
    // textUnderlineOffset: hovered ? "1px" : "0px",
    // fontSize: hovered ? "10px" : "20px",
    // y: hovered ? 24 : 0,
    // config: { mass: 2, tension: 600, friction: 120 },
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      setHovered(hovering);
    },
  });

  const trail = useTrail(navElements.length, {
    config: { mass: 2, tension: 600, friction: 120 },
    from: { opacity: 0, x: 20, y: 10 },
    to: { opacity: 1, x: 0, y: 0 },
  });

  const handleClick = (e, button) => {
      setSectionNumber(button);
  };
  return (
    <div className="flex flex-col fixed top-0 left-0 w-[100vw] mix-blend-difference" style={{ zIndex: 9999 }}>
      <nav className="flex justify-evenly content-center w-full text-primary text-4xl ">
        {trail.map(({ ...style }, index) => (
          <animated.div key={index} style={style}>
            <animated.button
              //@ts-ignore
              {...bind()}
              className="tracking-widest py-7 px-20 hover:line-through  hover:decoration-wavy hover:decoration-2"
              style={springButton}
              onClick={(e) => handleClick(e, index)}
            >
              {navElements[index]}
            </animated.button>
          </animated.div>
        ))}
      </nav>
      {/* <div id="progress-bar" className="h-[10px] bg-red-300 w-full"></div> */}
    </div>
  );
}
