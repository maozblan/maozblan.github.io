import {type Writable, writable} from 'svelte/store';

export const portfolio: { [key: string]: Project} = {
  fireworks: {
    title: "l-system fireworks",
    year: 2025,
    icon: "",
    tags: ["art", "p5", "javascript"],
  },
  scaramuccia: {
    title: "scaramuccia",
    year: 2025,
    icon: "",
    tags: ["art", "desktop"],
  },
  coffeeForTheGone: {
    title: "coffee for the gone",
    year: 2024,
    icon: "",
    tags: ["game", "Typescript"],
  },
  linesOfSleight: {
    title: "lines of sleight",
    year: 2024,
    icon: "",
    tags: ["game", "unity3D", "c#", "ui"],
  },
  smokeScreenAndMirrors: {
    title: "smokescreen & mirrors",
    year: 2024,
    icon: "",
    tags: ["game", "javascript", "phaser"],
  },
}

export const current: Writable<string> = writable("");
