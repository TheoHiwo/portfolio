export type Tags =
  | "ReactJS"
  | "TypeScript"
  | "Javascript"
  | "AutoHotKey"
  | "P5JS"
  | "ThreeJS"
  | "BabylonJS"
  | "ChakraUI"
  | "TailwindCSS"
  | "Traditional"
  | "Photoshop"
  | "Gimp"
  | "Illustrator"
  | "Affinity Designer"
  | "Unity"
  | "Blender"
  | "Rive";

export interface IProjectProp {
  id: number;
  title: string;
  tags: Tags[];
  description: string;
  image: string;
  alt: string;
  github: string | null;
  live: string | null;
}
//todo ecrire +
export const cards: IProjectProp[] = [
  {
    id: 0,
    title: "baseBlue",
    tags: ["ReactJS", "TypeScript", "ChakraUI"],
    description:
      "An Instagram-like gallery of paintings and wonderful artworks, predominantly in tints of blue. All thanks to the Art Institute of Chicago's API.",
    image: "/projects-thumbnail/base-blue.webp",
    alt: "baseBlue",
    github: "https://github.com/TheoHiwo/base-blue",
    live: "https://baseblue-hiwoyn.vercel.app/",
  },
  {
    id: 1,
    title: "Generative Art",
    tags: ["P5JS", "Javascript"],
    description:
      "Generative Art is an exciting process of iteration, testing math algorithm that I didn't know before and letting randomness blows my mind. I tend to create galaxies, stars, and clouds as those inspire me and produce good results randomly, all using p5js. They were released as NFTs on fxhash.",
    image: "/projects-thumbnail/generative-art.webp",
    alt: "Generative Art",
    github: "",
    live: "https://www.fxhash.xyz/u/hiwo_theo",
  },
  {
    id: 2,
    title: "SearShape",
    tags: ["BabylonJS", "TypeScript"],
    description:
      "SearShape, Search the Shape, is a  mini-game aiming to find an object identical to the big one in the center by rotating around in 3D. Build with BabylonJs, it was the first time I'd used a 3D library and typescript.",
    image: "/projects-thumbnail/searshape.webp",
    alt: "SearShape",
    github: "https://github.com/TheoHiwo/SearShape",
    live: "https://searshape-hiwoyn.vercel.app/",
  },
  {
    id: 4,
    title: "MmoMouse",
    tags: ["AutoHotKey"],
    description: "Enhance a MmoMouse with even more shortcuts by combining two buttons based on active window context using the automation scripting AutoHotKey. For now only on Windows, but thinking of doing the same for Mac.",
    image: "/projects-thumbnail/mmo-mouse.webp",
    alt: "MmoMouse",
    github: "https://github.com/TheoHiwo/MmoMouseAHK",
    live: "",
  },
  {
    id: 3,
    title: "this.Portfolio",
    tags: ["ReactJS", "TypeScript", "ThreeJS"],
    description: "Playing with the React Three Fiber ecosystem and having fun with drei/Html allows to add html in a 3D scene as a mystical computer screen and thus receive all the interactions a website page can have.",
    image: "/projects-thumbnail/this-portfolio-code.webp",
    alt: "this.Portfolio",
    github: "https://github.com/TheoHiwo/portfolio",
    live: "",
  },
];

export const cardsDesign: IProjectProp[] = [
  {
    id: 0,
    title: "Drawings",
    tags: ["Traditional", "Photoshop", "Gimp"],
    description: "Drawing and being mindful of every stroke is relaxing. Forget the time and focus on contrast, shapes, edges, and textures.",
    image: "/projects-thumbnail/drawings.webp",
    alt: "Drawings",
    github: "",
    live: "https://www.instagram.com/hiwo_theo/",
  },
  {
    id: 1,
    title: "Logo Design",
    tags: ["Illustrator", "Affinity Designer"],
    description: "I love the constraint of a logo, being simple and still reflecting a brand image to a user. I've done some for friends Twitch channels and family enterprise.",
    image: "/projects-thumbnail/logo-design.webp",
    alt: "Logo Design",
    github: "",
    live: "https://www.instagram.com/theo_berraboukh/",
  },
  {
    id: 2,
    title: "VRChat",
    tags: ["Blender", "Unity"],
    description: "VRChat is a game where you can have your avatar and meet people from all over the world. For me, it was Japan. I wanted my character, so I've remastered a skin from the game League of Legends using Blender and linked some animations and shape keys to it.",
    image: "/projects-thumbnail/vr-chat.webp",
    alt: "VRChat",
    github: "",
    live: "",
  },
  {
    id: 3,
    title: "this.Portfolio",
    tags: ["Blender", "Rive"],
    description: "A diorama hand painted in Blender that represents a fantasy Maple tree connected to a huge monitor, which will display a representation of himself as a living leaf on the screen, animated with Rive. ",
    image: "/projects-thumbnail/this-portfolio-design.webp",
    alt: "this.Portfolio",
    github: "https://github.com/TheoHiwo/portfolio",
    live: "",
  },
];
