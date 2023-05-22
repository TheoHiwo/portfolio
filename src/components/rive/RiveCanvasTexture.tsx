import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CanvasTexture, Vector2 } from "three";
import { Rive } from "@rive-app/canvas";
import useRiveTexture, { CANVAS_SIZE } from "./useRiveTexture";



export default function RiveCanvasTexture(props) {
  const canvasRef = useRiveTexture();
  const textureRef = useRef<CanvasTexture>();
  const mouseUV = useRef(new Vector2());
  const context = useRef(canvasRef.current.getContext("2d"));

  useFrame(() => {
    let ctx = context.current;
    ctx.fillStyle = "red";

    ctx.fillRect(
      (mouseUV.current.x)*CANVAS_SIZE,
      (1 - mouseUV.current.y)*CANVAS_SIZE,
      CANVAS_SIZE*0.1,
      CANVAS_SIZE*0.1
      );

    textureRef.current!.needsUpdate = true;
  });

  return (
    <>
      <mesh onPointerMove={(e) => (mouseUV.current = e.uv)}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial>
          {/* <canvasTexture attach="map" ref={textureRef} args={[canvasRef.current]}/> */}
          <canvasTexture attach="map" ref={textureRef} image={canvasRef.current} />
        </meshBasicMaterial>
      </mesh>
    </>
  );
}
