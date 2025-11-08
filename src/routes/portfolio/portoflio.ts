import { img } from "$lib/img";

export const maxPointValue: number = 10;

export const portfolio: Project[] = [
  {
		id: "coffeeForTheGone",
    title: "coffee for the gone",
    date: "2024",
    cover: img.cftg_icon,
    tags: ["typescript", "html5", "node.js", "game", "art", "solo project"],
    summary: "why don't we chill over a cup of otherworldly coffee",
		location: {
			technical: 4.2,
			creative: 5,
		},
  },
	{
		id: "linesOfSleight",
    title: "lines of sleight",
		date: "2024",
    cover: img.los_icon,
    tags: ["unity3D", "c#", "ui", "art", "team project"],
    summary: "it all comes down to the draw",
		location: {
			technical: 7.5,
			creative: 5.6,
		},
  },
	{
		id: "smokescreenAndMirrors",
    title: "smokescreen & mirrors",
    date: "2024",
    cover: img.sam_icon,
    tags: ["javascript", "phaser", "game", "solo project", "art"],
    summary: "meow meow meow, pew pew pew",
		location: {
			technical: 3,
			creative: 4,
		},
	},
  {
		id: "fireworks",
    title: "l-system fireworks",
		date: "2024",
    cover: img.fw_icon,
    tags: ["procedrual", "art", "solo project", "p5", "javascript"],
    summary: "something small, something silly",
		location: {
			technical: 3.2,
			creative: 6.5,
		},
  },
  {
		id: "scaramuccia",
    title: "scaramuccia",
    date: "2025",
    cover: img.scara_icon,
    tags: ["design", "wallpaper", "art"],
    summary: "try, but the screen cannot save you",
		location: {
			technical: 2.2,
			creative: 8.7,
		},
  },
];
