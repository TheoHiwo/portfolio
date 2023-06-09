import { useCanvasStore } from "@/components/canvas/canvasStore";
import Card from "./Cards";
import { cardsDesign } from "./data";
import { HELPER_MESSAGES } from "./Projects";
import { arcadeArcade } from "../Home/Home";
import clsx from "clsx";


type Props = {
  scrollToOffset: (offset: number) => void;
};

export default function ProjectsDesign({scrollToOffset}: Props) {
  const isOpenDesign = useCanvasStore((state) => state.isOpenDesign);
  const helperMessage =  isOpenDesign ? HELPER_MESSAGES.close : HELPER_MESSAGES.open;
  return (
    <section className="h-full w-full flex flex-col justify-between px-10 py-10 text-primary bg-secondary relative" id="project-design">
      <div className="flex flex-row justify-between mb-5">
        <h1 className="text-5xl self-center"><span className={clsx(arcadeArcade.className, "text-3xl")}>PROJECTS</span>.design</h1>
        <h1 className="text-base self-center pt-4 opacity-70">{helperMessage.toUpperCase()}</h1>
      </div>

      <div className="h-full flex flex-wrap overflow-hidden">
        {cardsDesign.map((card) => (
          <Card key={card.id} content={card} from="design" scrollToOffset={scrollToOffset}/>
        ))}
      </div>
    </section>
  );
}

