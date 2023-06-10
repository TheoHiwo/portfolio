import { useCanvasStore } from "@/components/canvas/canvasStore";
import Card from "./Cards";
import { cards } from "./data";
import { Press_Start_2P } from "next/font/google";
import clsx from "clsx";
import { arcadeArcade } from "../Home/Home";

// const arcadeArcade = Press_Start_2P({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// });

type Props = {
  scrollToOffset: (offset: number) => void;
};
export const HELPER_MESSAGES = {
  open: "Click a card to see more ⤢",
  close: "Click again to close ⤾",
}

export default function Projects({scrollToOffset}: Props) {
  const isOpenCode = useCanvasStore((state) => state.isOpenCode);
  const helperMessage =  isOpenCode ? HELPER_MESSAGES.close : HELPER_MESSAGES.open;

  return (
    <section className="h-full w-full flex flex-col justify-between px-10 py-10 text-primary bg-secondary relative" id="project">
      <div className="w-[673px] h-[336px] absolute z-10 left-0 bottom-full ">
        <div className="pixelart-to-css" />
      </div>
      <div className="flex flex-row justify-between mb-5">
        <h1 className="text-5xl self-center"><span className={clsx(arcadeArcade.className, "text-3xl")}>PROJECTS</span>.code</h1>
        <h1 className="text-base self-center pt-4 opacity-70">{helperMessage.toUpperCase()}</h1>
      </div>

      <div className="h-full flex flex-wrap overflow-hidden">
        {cards.map((card) => (
          <Card key={card.id} content={card} from="code" scrollToOffset={scrollToOffset}/>
        ))}
      </div>
    </section>
  );
}
