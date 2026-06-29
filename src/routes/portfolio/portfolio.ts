import { img } from "$lib/img";

export const portfolio: { [key: string]: Project } = {
  stitchlings: {
    title: "Stitchlings",
    icon: img.stitch_icon,
    type: "game",
    tags: ["c#", "unity", "art", "ui"],
  },
  fishing: {
    title: "FiSHiNG",
    icon: img.fishing_icon,
    type: "game",
    tags: ["c#", "unity", "art", "ui"],
  },
  fireworks: {
    title: "L-system fireworks",
    icon: img.fw_icon,
    type: "procedural art",
    tags: ["p5", "javascript"],
    // links: [
    //   {
    //     href: "https://maozblan.github.io/cmpm169/experiment3/index.html",
    //     text: "project submission page",
    //   },
    //   {
    //     href: "https://github.com/maozblan/cmpm169/tree/master/experiment3/js",
    //     text: "source code",
    //   },
    // ],
  },
  coffeeForTheGone: {
    title: "Coffee for the Gone",
    icon: img.cftg_icon,
    type: "game",
    tags: ["typescript", "html5"],
    // links: [
    //   {
    //     href: "https://maozblan.github.io/cmpm-121-demo-1",
    //     text: "play in browser",
    //   },
    //   {
    //     href: "https://github.com/maozblan/cmpm-121-demo-1",
    //     text: "source code",
    //   },
    // ],
  },
  scaramuccia: {
    title: "Scaramuccia",
    icon: img.scara_icon,
    type: "desktop wallpaper",
    tags: ["design", "wallpaper"],
    // links: [
    //   {
    //     href: "https://steamcommunity.com/sharedfiles/filedetails/?id=3403015347",
    //     text: "steam wallpaper engine entry",
    //   },
    //   {
    //     href: img.scaraConcept,
    //     text: "design concept pdf",
    //   },
    // ],
  },
  linesOfSleight: {
    title: "Lines of Sleight",
    icon: img.los_icon,
    type: "game",
    tags: ["unity3D", "c#", "ui"],
    // links: [
    //   {
    //     href: "https://violets321.itch.io/line-of-sleight",
    //     text: "itch.io page, windows build only",
    //   },
    //   {
    //     href: "https://github.com/AKris0090/DexDomain",
    //     text: "source code",
    //   },
    // ],
  },
  smokescreenAndMirrors: {
    title: "smokescreen & mirrors",
    icon: img.sam_icon,
    type: "game",
    tags: ["javascript", "phaser"],
    // links: [
    //   {
    //     href: "https://maozblan.github.io/smokescreen-and-mirrors/",
    //     text: "play in browser",
    //   },
    //   {
    //     href: "https://github.com/maozblan/smokescreen-and-mirrors",
    //     text: "source code",
    //   },
    // ],
  },
};
