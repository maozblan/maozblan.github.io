import { img } from "$lib/img";

export const portfolio: { [key: string]: Project } = {
  fireworks: {
    title: "l-system fireworks",
    year: 2025,
    icon: img.fw_icon,
    type: "procedural art",
    tags: ["p5", "javascript"],
    tagline: "something small, something silly",
    links: [
      {
        href: "https://maozblan.github.io/cmpm169/experiment3/index.html",
        text: "project submission page",
      },
      {
        href: "https://github.com/maozblan/cmpm169/tree/master/experiment3/js",
        text: "source code",
      },
    ],
  },
  scaramuccia: {
    title: "scaramuccia",
    year: 2025,
    icon: img.scara_icon,
    type: "desktop wallpaper",
    tags: ["design", "wallpaper"],
    tagline: "try, but the screen cannot save you",
    links: [
      {
        href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3403015347",
        text: "steam wallpaper engine entry",
      },
      {
        href: img.scaraConcept,
        text: "design concept pdf",
      },
    ],
  },
};