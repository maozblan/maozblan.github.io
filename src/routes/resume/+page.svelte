<script lang="ts">
  import { img } from "$lib/img";

  interface ResumeBlock {
    title: string;
    sub1?: string;
    sub2: string;
    text: string[];
    list: boolean;
  }
  let resume: { [key: string]: ResumeBlock } = {
    education: {
      title: "University of California: Santa Cruz",
      sub2: "2022 – 2025",
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

  let skills: { [key: string]: string[] }[] = [
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
</script>

{#snippet textBlock(info: ResumeBlock)}
  <div class="block col">
    <div class="header row">
      <h3 class="title">{info.title}</h3>
      {#if info.sub1}
        <h3 class="sub1">{info.sub1}</h3>
      {/if}
      <h3 class="sub2">{info.sub2}</h3>
    </div>
    <ul
      style="list-style-image: {img.tringle_list};"
      class={info.list ? "" : "not-list"}
    >
      {#each info.text as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet skillBlock(skillList: { [key: string]: string[] })}
  {#each Object.keys(skillList) as skill}
    <div class="skill block">
      <h3>{skill.replaceAll("_", " ")}</h3>
      <ul>
        {#each skillList[skill] as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
{/snippet}

<h1>web resume :]</h1>

<h2>contact info</h2>
<div id="socials-icons" class="row">
  <a href="https://www.linkedin.com/in/mclyssali/" target="_blank"><img alt="linkedin"/></a>
  <a href="https://github.com/maozblan" target="_blank"><img alt="github"/></a>
  <a href="https://maozblan.itch.io/" target="_blank"><img alt="itch.io"/></a>
</div>

<h2>education</h2>
{@render textBlock(resume.education)}

<h2>experience</h2>
{@render textBlock(resume.ex_ugta)}
{@render textBlock(resume.ex_nasa)}

<h2>skills</h2>
<div class="row" style="justify-content: space-around;">
  <div class="col">
    {@render skillBlock(skills[0])}
    {@render skillBlock(skills[1])}
  </div>
  {@render skillBlock(skills[2])}
</div>

<h2>notable projects</h2>
{@render textBlock(resume.proj_TtGaR)}
{@render textBlock(resume.proj_diligent)}
{@render textBlock(resume.proj_LoS)}
{@render textBlock(resume.proj_sNm)}
{@render textBlock(resume.proj_DC)}

<style>
  #socials-icons {
    display: flex;
    justify-content: space-around;
  }

  h2 {
    margin-bottom: 0;
  }

  .header {
    width: 100%;
    align-items: center;
  }
  .header > * {
    margin: 0;
  }
  .header .sub2 {
    margin-left: auto;
    margin-top: auto;
    font-size: 0.9em;
  }
  .header .sub1 {
    margin-left: 1em;
    margin-top: auto;
    font-size: 0.9em;
  }
  .block ul {
    margin-top: 0.5em;
  }
  .block {
    margin: 1em 0;
  }
  ul.not-list {
    list-style-type: none;
  }

  /* overrides for mobile */
  @media only screen and (orientation: portrait) {
    .header {
      flex-direction: column;
      align-items: start;
    }
    .header .sub2 {
      margin-left: 1em;
    }
  }
</style>
