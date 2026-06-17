import { img } from "$lib/img";

export const portfolio: { [key: string]: Project } = {
  coffeeForTheGone: {
    title: "coffee for the gone",
    year: 2024,
    icon: img.cftg_icon,
    type: "game",
    tags: ["typescript", "html5"],
    tagline: "why don't we chill over a cup of otherworldly coffee",
    links: [
      {
        href: "https://maozblan.github.io/cmpm-121-demo-1",
        text: "play in browser",
      },
      {
        href: "https://github.com/maozblan/cmpm-121-demo-1",
        text: "source code",
      },
    ],
  },
  linesOfSleight: {
    title: "lines of sleight",
    year: 2024,
    icon: img.los_icon,
    type: "game",
    tags: ["unity3D", "c#", "ui"],
    tagline: "it all comes down to the draw",
    links: [
      {
        href: "https://violets321.itch.io/line-of-sleight",
        text: "itch.io page, windows build only",
      },
      {
        href: "https://github.com/AKris0090/DexDomain",
        text: "source code",
      },
    ],
  },
  smokescreenAndMirrors: {
    title: "smokescreen & mirrors",
    year: 2024,
    icon: img.sam_icon,
    type: "game",
    tags: ["javascript", "phaser"],
    tagline: "meow meow meow, pew pew pew",
    links: [
      {
        href: "https://maozblan.github.io/smokescreen-and-mirrors/",
        text: "play in browser",
      },
      {
        href: "https://github.com/maozblan/smokescreen-and-mirrors",
        text: "source code",
      },
    ],
  },
};
