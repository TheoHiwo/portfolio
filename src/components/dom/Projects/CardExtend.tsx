import { animated, config, useSpring } from "@react-spring/web";

import { BsCodeSlash } from "react-icons/bs";
import { IProjectProp } from "./data";
import Image from "next/image";

//todo add link center section on click with href id

const CardExtend = ({ content, open, from }: { content: IProjectProp; open: boolean; from: "code" | "design" }) => {
  const { description, image, alt, github, live } = content;

  const widthContent = useSpring({
    config: config.stiff,
    width: open ? "100%" : "0%",
    display: open ? "flex" : "none",
  });
  
  return (
    <animated.div className="flex flex-row justify-between overflow-hidden" style={widthContent}>
      {/*left*/}
      <div className="flex flex-col justify-between w-full flex-1 pr-10">
        {/*description*/}
        <h1 className="text-lg items-center">{description.toUpperCase()}</h1>
        {/*links*/}
        <div className="flex justify-between relative text-clickable border-t-2 border-secondary">
          {/*github*/}
          {github && (
            <a href={github} target="_blank" className="hover:text-hovered ">
              <span className="absolute bottom-0 left-0 cursor-help">
                <BsCodeSlash />
              </span>
            </a>
          )}
          {/*live*/}
          {live && (
            <a href={live} target="_blank" className="text-4xl cursor-help hover:text-hovered ">
              <span className="absolute bottom-0 right-0 leading-[0.7]">↗ VIEW LIVE</span>
            </a>
          )}
        </div>
      </div>

      {/*right*/}
      {/*image*/}
      <div className="flex-1 object-contain bg-primary  aspect-square relative pointer-events-none">
        <Image
          alt={alt}
          src={image}
          // width={400}
          // height={400}
          fill
          quality={100}
          style={{ pointerEvents: "none" }}
          sizes="100%"
        />
      </div>
    </animated.div>
  );
};

export default CardExtend;
