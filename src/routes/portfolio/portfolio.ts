import {type Writable, writable} from 'svelte/store';

export const portfolio: { [key: string]: Project} = {
  fireworks: {
    title: "l-system fireworks",
    year: 2025,
    icon: "",
    tags: ["art", "p5", "javascript"],
    tagline: "something small, something silly",
    links: [
      {
        href: "https://maozblan.github.io/cmpm169/experiment3/index.html",
        text: "project submission page",
      },
      {
        href: "https://github.com/maozblan/cmpm169/experiment3/index.html",
        text: "source code",
      },
    ],
  },
  scaramuccia: {
    title: "scaramuccia",
    year: 2025,
    icon: "",
    tags: ["art", "desktop"],
    tagline: "try, but the screen cannot save you",
    links: [
    ],
  },
  coffeeForTheGone: {
    title: "coffee for the gone",
    year: 2024,
    icon: "",
    tags: ["game", "Typescript"],
    tagline: "",
    links: [
    ],
  },
  linesOfSleight: {
    title: "lines of sleight",
    year: 2024,
    icon: "",
    tags: ["game", "unity3D", "c#", "ui"],
    tagline: "",
    links: [
    ],
  },
  smokescreenAndMirrors: {
    title: "smokescreen & mirrors",
    year: 2024,
    icon: "",
    tags: ["game", "javascript", "phaser"],
    tagline: "",
    links: [
    ],
  },
}

export const current: Writable<string> = writable("");
