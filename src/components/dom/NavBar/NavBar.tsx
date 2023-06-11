import { useCanvasStore } from "@/components/canvas/canvasStore";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import clsx from "clsx";
import React, { useEffect } from "react";

type Props = {};

const navElements = ["HOME", "PROJECTS", "ABOUT ME", "CONTACT"];

export default function NavBar({}: Props) {
  const [hovered, setHovered] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const sectionNumber = useCanvasStore((state) => state.sectionNumber);
  const setSectionNumber = useCanvasStore((state) => state.setSectionNumber);

  const [springButton, apiButton] = useSpring(() => ({
    // text-underline-offset: 1px;
    // textUnderlineOffset: hovered ? "1px" : "0px",
    // fontSize: hovered ? "10px" : "20px",
    config: { mass: 2, tension: 600, friction: 120 },
  }));

  let navWidth = "50vw";

  function cameraMediaQuery(x) {
    if (x.matches) {
      // If media query matches
      navWidth = "50vw";
    } else {
      navWidth = "30vw";
    }
  }

  let mobileBreakpoint;
  useEffect(() => {
    mobileBreakpoint = window.matchMedia("(max-width: 700px)");
    cameraMediaQuery(mobileBreakpoint); // Call listener function at run time
  }, []);
  
  const [springNav] = useSpring(
    () => ({
      // width: open ? navWidth : "0vw",
      x: open ? 0 : -300,
      opcaity: open ? 1 : 0,
      config: { mass: 2, tension: 600, friction: 120 },
    }),
    [open]
  );

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
    setOpen(false);
  };
  const handleHamburgerClick = (e) => {
    setOpen(!open);
  };
  return (
    <menu className="">
      {/*hamburger*/}
      <button
        className=" fixed top-0 left-0 flex items-center text-white p-3"
        onClick={handleHamburgerClick}
        style={{ zIndex: 51 }}
      >
        <svg
          className="block h-4 w-4 lg:h-8 lg:w-8 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      {/*menu*/}
      <animated.div
        className={clsx(
          "fixed top-0 left-0 text-primary h-[100vh] w-[50vw] lg:w-[30vw] bg-[#0F0003] lg:text-7xl",
          open ? "block" : "hidden"
        )}
        style={{ zIndex: 50, ...springNav }}
      >
        <div className="flex flex-col pt-8 lg:pt-8 justify-evenly content-center h-full w-full">
          {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={style}>
              <animated.button
                //@ts-ignore
                {...bind()}
                className="tracking-widest hover:line-through hover:decoration-wavy hover:decoration-2 w-full h-20"
                style={springButton}
                onClick={(e) => handleClick(e, index)}
              >
                {navElements[index]}
              </animated.button>
            </animated.div>
          ))}
        </div>
      </animated.div>
    </menu>
  );
}
