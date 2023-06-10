import { SiAdobephotoshop, SiGimp, SiAdobeillustrator, SiAffinitydesigner, SiUnity, SiBlender } from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";
import { Tags } from "../data";

export default function TagIcon({ tag, size }: { tag: Tags; size: number }) {
  return (
    <div className="pt-1">
      {tag === "Photoshop" ? (
        <SiAdobephotoshop size={`${size}em`} />
      ) : tag === "Gimp" ? (
        <SiGimp size={`${size}em`} />
      ) : tag === "Traditional" ? (
        <FaPencilAlt size={`${size}em`} />
      ) : tag === "Illustrator" ? (
        <SiAdobeillustrator size={`${size}em`} />
      ) : tag === "Affinity Designer" ? (
        <SiAffinitydesigner size={`${size}em`} />
      ) : tag === "Unity" ? (
        <SiUnity size={`${size}em`} />
      ) : tag === "Blender" ? (
        <SiBlender size={`${size}em`} />
      ) : null}
    </div>
  );
}
