<script lang="ts">
  import { resume, skills } from "./resume";
  import { img } from "$lib/img";
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
    <ul class={info.list ? "" : "not-list"}>
      {#each info.text as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet skillBlock(skillList: { [key: string]: string[] })}
  {#each Object.keys(skillList) as skill}
    <div class="skill">
      <h3>{skill.replaceAll("_", " ")}</h3>
      <ul>
        {#each skillList[skill] as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
{/snippet}

<!-- 
      ________
      |000000|
      |000000|
      |000000|
------|000000|------
\000000000000000000/
 \0000000000000000/
  \00000000000000/
   \000000000000/
    \0000000000/
     \00000000/
      \000000/
       \0000/
        \00/
         \/
-->

<h1>web resume :]</h1>

<h2>contact info</h2>
<div id="socials-icons" class="row block">
  <a href="https://www.linkedin.com/in/mclyssali/" target="_blank"
    ><img src={img.linkedin_icon} alt="linkedin" /></a
  >
  <a href="https://github.com/maozblan" target="_blank"
    ><img src={img.github_icon} alt="github" /></a
  >
  <a href="https://maozblan.itch.io/" target="_blank"
    ><img src={img.itch_icon} alt="itch.io" /></a
  >
</div>

<h2>education</h2>
{@render textBlock(resume.education)}

<h2>experience</h2>
{@render textBlock(resume.ex_ugta)}
{@render textBlock(resume.ex_nasa)}

<h2>skills</h2>
<div class="row block" style="justify-content: space-around;">
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
  #socials-icons img {
    width: 3em;
    height: 3em;
    /* change color to #FF383B */
    filter: invert(41%) sepia(19%) saturate(4497%) hue-rotate(327deg)
      brightness(95%) contrast(127%);
    /* change color to #ddd */
    /* filter: invert(99%) sepia(0%) saturate(4253%) hue-rotate(164deg)
      brightness(121%) contrast(73%); */
  }

  h2 {
    margin-bottom: 0;
    border-bottom: 1px solid #ddd;
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
