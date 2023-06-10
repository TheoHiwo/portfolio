import { animated, config, useSpring } from "@react-spring/web";
import { useRef, useState } from "react";
import { IProjectProp } from "./data";

import { useGesture } from "@use-gesture/react";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import { useCanvasStore } from "@/components/canvas/canvasStore";
import { arcadeArcade } from "../Home/Home";


const CardExtend = dynamic(() => import("./CardExtend"), {
  loading: () => <p>Loading...</p>,
});

const TagIconCode = dynamic(() => import("./TagIcons/TagIconCode"), {
  loading: () => <p>Loading...</p>,
});

const TagIconDesign = dynamic(() => import("./TagIcons/TagIconDesign"), {
  loading: () => <p>Loading...</p>,
});

type Props = {
  content: IProjectProp;
  from: "code" | "design";
  scrollToOffset: (offset: number) => void;
};

const Card = ({ content, from, scrollToOffset }: Props) => {
  const refCard = useRef<HTMLDivElement>(null!);
  const { id, title, tags } = content;
  const setIsOpenCode = useCanvasStore((state) => state.setIsOpenCode);
  const setIsOpenDesign = useCanvasStore((state) => state.setIsOpenDesign);
  const basisCol = from === "code" ? "33.3333%" : "50%";
  const [open, toggle] = useState(false);
  const [wasDragging, setWasDragging] = useState(false);
  const timeoutId = useRef<any>(null);

  const widthWrapper = useSpring({
    flexBasis: open ? "100%" : basisCol,
    config: { mass: 1, tension: open ? 210 : 0, friction: 20 },
  });

  const [spring, api] = useSpring(
    () => ({
      scale: 1,
      config: config.stiff,
    }),
    [open]
  );

  const bind = useGesture(
    {
      onHover: ({ active, first }) => {
        if (!open) {
          api.start({
            scale: active && !open ? 0.9 : 1,
          });
        }
      },

      onDragStart: ({ event, cancel }) => {
        setWasDragging(true);
      },
      onDragEnd: ({ event }) => {
        timeoutId.current = setTimeout(() => {
          setWasDragging(false);
        }, 1);
      },
      onClick: ({ event }) => {
        if (!wasDragging) {
          toggle(!open);
          if (!open) scrollToOffset(from === "code" ? 1 : 1.57);
          from === "code" ? setIsOpenCode(!open) : setIsOpenDesign(!open);
        }
      },
    },
    { drag: { delay: true } }
  );

  return (
    <>
      <animated.div
        
        ref={refCard}
        className={clsx(
          !open && "place-content-center text-center order-0 ",
          open && "h-full w-full order-first",
          "flex flex-col grow  shrink bg-primary bg-opacity-5 hover:bg-gray-500/10 cursor-pointer font-pixel"
        )}
        //@ts-ignore
        {...bind()}
        style={widthWrapper}
        // onClick={handleClick}
      >
        {/*MAIN PART*/}
        <animated.div style={spring} className={clsx(open && "flex justify-between", !open && "")}>
        
          <h1 className={clsx("text-lg tracking-normal py-2", arcadeArcade.className, !open && "text-clickable hover:text-clickable/80")}>
            {title}
            </h1>
          {/*tags*/}
          <div className={clsx(!open && "place-content-center ", open && "", "text-base gap-x-4 flex")}>
            {tags.map((tag) => (
              <div key={tag+from} className={clsx(open && " content-center flex-wrap", "flex flex-row gap-x-2")}>
                <h1 className="">{tag}</h1>
                {from === "code" && <TagIconCode tag={tag} size={1.2} />}
                {from === "design" && <TagIconDesign tag={tag} size={1.2} />}
              </div>
            ))}
          </div>
        </animated.div>

        {/*SECONDARY PART*/}

        <CardExtend content={content} open={open} from={from} />
      </animated.div>
    </>
  );
};

export default Card;
