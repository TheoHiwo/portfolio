import { useCanvasStore } from "@/components/canvas/canvasStore";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import clsx from "clsx";
import React from "react";

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
    // y: hovered ? 24 : 0,
    // config: { mass: 2, tension: 600, friction: 120 },
  }));

  const [springNav] = useSpring(() => ({
    width: open ? "50vw" : "0vw",
    opcaity: open ? 1 : 0,
    config: { mass: 2, tension: 600, friction: 120 },
  }), [open]);

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
  const handleHamburgerClick = (e) => {
    setOpen(!open);
  };
  return (
    // <div className={clsx("flex flex-col fixed top-0 left-0 w-[100vw] bg-[#0F0003]",)} style={{ zIndex: 9999 }}>
    //   <nav className="flex sm:flex-col justify-evenly content-center w-full text-primary text-4xl ">
    //     {trail.map(({ ...style }, index) => (
    //       <animated.div key={index} style={style}>
    //         <animated.button
    //           //@ts-ignore
    //           {...bind()}
    //           className="tracking-widest py-7 px-20 hover:line-through  hover:decoration-wavy hover:decoration-2"
    //           style={springButton}
    //           onClick={(e) => handleClick(e, index)}
    //         >
    //           {navElements[index]}
    //         </animated.button>
    //       </animated.div>
    //     ))}
    //   </nav>
    //   {/* <div id="progress-bar" className="h-[10px] bg-red-300 w-full"></div> */}
    // </div>

    <menu className="max-w-min">
      {/*hamburger*/}
      <button
        className=" fixed top-0 left-0 flex items-center text-white p-3"
        onClick={handleHamburgerClick}
        style={{ zIndex: 9999 }}
      >
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      {/*menu*/}
      <animated.div
        className={clsx("  fixed top-0 left-0 text-primary w-[50vw] lg:w-[100vw] h-[100vh] bg-[#0F0003]", open ? "block" : "hidden")}
        style={{ zIndex: 9998, ...springNav}}
      >
        <div className=" pt-20 flex flex-col grow shrink basis-1/2 flex-wrap">
          {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={style}>
              <animated.button
                //@ts-ignore
                {...bind()}
                className="tracking-widest py-7 hover:line-through  hover:decoration-wavy hover:decoration-2"
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
