export const resume: { [key: string]: ResumeBlock } = {
  education: {
    title: "University of California: Santa Cruz",
    sub2: "EXPECTED GRADUATION JUNE 2025",
    text: [
      "B.S. in Computer Science: Game Design",
      "Minor in Computer Science",
    ],
    list: false,
  },
  ex_ugta: {
    title: "Undergraduate Tutor",
    sub1: "UCSC Baskin Engineering",
    sub2: "SEPT 2023 – PRESENT",
    text: [
      "Assisted in weekly tutoring sessions using Pandas and Scikit-learn for a class of 200 students",
      "Worked with co-workers on a JSON-based question bank that can be converted into LaTeX or HTML quizzes",
    ],
    list: true,
  },
  ex_nasa: {
    title: "OSTEM Intern",
    sub1: "NASA Ames Research Center",
    sub2: "JUNE 2023 – AUG 2023",
    text: [
      "Modeled SFO Airport and 6 airplane models using Autodesk Maya for 2D to 3D data visualization",
      "Standardized low-poly airplane models and wrote scripts to speed up 3D modeling process by 5-fold",
      "Experimented with real-time rendering cross application modeling implementation in Nvidia Omniverse",
      "Collaborated in creating a running 3D animation using archived open-data and proved validity of Digital Twin for air traffic control",
    ],
    list: true,
  },
  proj_TtGaR: {
    title: "Take the Grade and Run",
    sub1: "2024 Experimental Gameplay Project",
    sub2: "Godot - GDScript",
    text: [
      "Drafted, illustrated and implemented a 15 piece achievement system that slowly draws in a lo-fi room",
      "Collaborated on a 5 person team to make a 5-minigame piece focused around unconventional gameplay",
    ],
    list: true,
  },
  proj_diligent: {
    title: "Diligent",
    sub1: "2024 Full Stack Web Development Final Project",
    sub2: "PostgreSQL - Docker - React",
    text: [
      "Produced a mini web app referencing the style of Slack with authentication and multiple users",
      "Incorporated responsive web design for widescreen, laptop, and mobile interfaces using React and MUI",
      "Developed using RESTful API, Node.js server, and PostgreSQL while following OpenAPI specifications",
      "Wrote backend, frontend, and e2e tests with native React Testing and Jest Puppeteer",
    ],
    list: true,
  },
  proj_LoS: {
    title: "Lines of Sleight",
    sub1: "2024 Game Technologies Final Project",
    sub2: "Unity - C#",
    text: [
      "Created a top-down dungeon crawler with a focus of deckbuilding and dexterity in a 5-person team",
      "Built and integrated UI system using prefabs in Unity with singletons, managers, and OOP principles",
      "Designed and produced all menu screens, set of stylized playing cards, tokens, and edited game demo video",
    ],
    list: true,
  },
  proj_sNm: {
    title: "smokescreen & mirrors",
    sub1: "2024 Endless Runner",
    sub2: "JS - Phaser",
    text: [
      "Coded single-player game with random obstacle spawn in JavaScript and Phaser.js engine, solo project",
      "Illustrated all art assets using Aseprite, mixed audio using jsfxr and GarageBand, published on Github Pages",
    ],
    list: true,
  },
  proj_DC: {
    title: "Desktop Cat",
    sub1: "2023 ACM x GraceHacks Hackathon",
    sub2: "JS - HTML/CSS - Python",
    text: [
      "Created an editable and saveable task sheet implemented with JavaScript and linked to a Python Tkinter desktop pet",
      "Won most creative in Hackathon competition; team of two, worked on website interface and interlinking",
    ],
    list: true,
  },
};

export const skills: { [key: string]: string[] }[] = [
  {
    computer_languages: [
      "ECMAScript",
      "TypeScript",
      "HTML/CSS",
      "C/C++",
      "GDScript",
      "C#",
      "YAML",
      "Python",
      "SQL",
      "Bash",
    ],
  },
  { human_languages: ["English", "Chinese Mandarin"] },
  {
    "tools_&_apps": [
      "Git/GitHub",
      "VSCode",
      "VIM",
      "Svelte",
      "Godot",
      "Phaserjs",
      "Nodejs",
      "Aseprite",
      "Autodesk Maya",
      "Blender",
      "Unity3D",
      "Unreal Engine 5",
      "React",
      "Pandas",
      "Scikit-learn",
    ],
  },
];
