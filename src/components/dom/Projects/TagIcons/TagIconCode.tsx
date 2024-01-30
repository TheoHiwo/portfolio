import { SiReact, SiTypescript, SiJavascript, SiAutohotkey, SiChakraui, SiTailwindcss, SiGithub, SiUnity, SiBlender } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

import { Tags } from "../data";

export default function TagIcon({ tag, size }: { tag: Tags; size: number }) {
  return (
    <div className="pt-1">
      {tag === "ReactJS" ? (
        <SiReact size={`${size}em`} />
      ) : tag === "TypeScript" ? (
        <SiTypescript size={`${size}em`} />
      ) : tag === "Javascript" ? (
        <SiJavascript size={`${size}em`} />
      ) : tag === "AutoHotKey" ? (
        <SiAutohotkey size={`${size}em`} />
      ) : tag === "Unity" ? (
        <SiUnity size={`${size}em`} />
      ) : tag === "Blender" ? (
        <SiBlender size={`${size}em`} />
      ) : tag === "ChakraUI" ? (
        <SiChakraui size={`${size}em`} />
      ) : tag === "TailwindCSS" ? (
        <SiTailwindcss size={`${size}em`} />
      ) : tag === "ThreeJS" ? (
        <TbBrandThreejs size={`${size}em`} />
      ) : tag === "BabylonJS" ? null : tag === "P5JS" ? null : null}
    </div>
  );
}
