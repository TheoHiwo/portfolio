import { useEffect, useRef, useState } from "react";
import { useCanvasStore } from "../canvas/canvasStore";
import clsx from "clsx";

export const cursorTextContent = {
  outside: "←Drag→ ",
  onScreen: "↓Scroll↓",
  onProjectsCards: "Click a card to open it",
  onProjectsCardOpen: "Click on card to close it",
  onLeaf: '"Hi!"',
};

const CURSOR_SPEED = 0.1;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef(null);
  const [hoverButton, setHoverButton] = useState(false);
  const cursorText = useCanvasStore((state) => state.cursorText);
  const cursorTextVisible = useCanvasStore((state) => state.cursorTextVisible);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener: any = document.addEventListener("mousemove", function (event) {
      mouseX = event.pageX;
      mouseY = event.pageY;
    });
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener("mouseover", function (e) {
      const element = e.target as HTMLElement;
      if (
        element.tagName.toLowerCase() === "button" ||
        element.tagName.toLowerCase() === "a" ||
        // check parent is button
        element.parentElement.tagName.toLowerCase() === "a" ||
        element.parentElement.tagName.toLowerCase() === "button" ||
        // check is input or textarea
        element.tagName.toLowerCase() === "input" ||
        element.tagName.toLowerCase() === "textarea"
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    });

    return () => {
      //@ts-ignore
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);
  // cursorTextVisible
  return (
    <>
      <div
        className={clsx(
          `z-[60] fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform mix-blend-difference text-white text-2xl font-pixel`,
          cursorTextVisible && "opacity-100",
          !cursorTextVisible && "opacity-0"
        )}
        ref={cursorOutline}
      >
        <div className="text-center">
          {cursorText === cursorTextContent.onScreen && <div>{cursorTextContent.outside}</div>}
          <div>{cursorText}</div>
        </div>
      </div>
    </>
  );
};
