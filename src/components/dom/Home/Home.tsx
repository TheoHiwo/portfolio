import { useCanvasStore } from "@/components/canvas/canvasStore";
import EyeTrack from "@/components/rive/EyeTrack";
import { clsx } from 'clsx';
import { Press_Start_2P } from "next/font/google";
import { cursorTextContent } from "../Cursor";


export const arcadeArcade = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

type Props = {};

//todo add link to project and about section bellow
//create a pureRef
export default function Home({}: Props) {
  const cursorText = useCanvasStore((state) => state.cursorText);
  const setCursorText = useCanvasStore((state) => state.setCursorText);
  const setCursorTextVisible = useCanvasStore((state) => state.setCursorTextVisible);
  return (
    <div
      //@ts-ignore
      // {...bind()}
      className="h-full w-full flex flex-col justify-between items-center px-10 text-secondary bg-primary overflow-hidden"
      onMouseMove={() => {
        if (cursorText !== cursorTextContent.onLeaf) setCursorText("onScreen")
        setCursorTextVisible(true)
      }}
      onMouseLeave={() => setCursorText("")}
      onPointerDown={() => setCursorTextVisible(true)}
    >
      <div className="w-full text-base tracking-wide px-1 text-center">
        momiji connected successfully in 1301.96years (8 branches)
      </div>

      <div className={clsx("text-center m-auto text-7xl tracking-widest")}>
        <h1 className={arcadeArcade.className}>THEO</h1>
        <h1 className="">BERRABOUKH</h1>
        <div className="h-1/2 w-1/2 m-auto">
          <EyeTrack />
        </div>
      </div>
      <h1 className="text-3xl  text-center mb-12">Creative Coder. 3D Artist.</h1>

    </div>
  );
}
