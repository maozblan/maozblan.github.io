<script lang="ts">
  import { portfolio } from "../portfolio";
  const item = "linesOfSleight";
</script>

<div class="fishfolio">
  <h1>{portfolio[item].title}</h1>

  <p>it all comes down to the draw</p>
  <div class="fishfolio-tags row">
    <div>{portfolio[item].year}</div>
    {#each portfolio[item].tags as tag}
      <div>{tag}</div>
    {/each}
  </div>

  <br />

  <div class="fishfolio-links row">
    <a href="https://violets321.itch.io/line-of-sleight" target="_blank"
      >itch.io page, windows build only</a
    >
    <a href="https://github.com/AKris0090/DexDomain" target="_blank">source code</a>
  </div>

  <br />

  <!-- embed video -->

  <br />

  <p>
    lines of sleight is when a dungeon crawler meets a deck builder. travel
    through a procedurally generated map fighting bosses in this casino-themed
    dungeon. use your cards to cast abilities to help you defeat the kings and
    queens before facing off the final boss. may luck and dexterity ever be on
    your side.
  </p>

  <p>
    this is a 5 person project (team bay leaves :D) for the game technologies
    class at my university. this is what we collectively made with the given
    theme "dexterity domain," using the unity game engine. on the team, i was in
    charge of the user interface, incorporating all interface implementation and
    interface related art assets.
  </p>

  <br />

  <!-- talk about personal contributions with screenshots -->

  <br />
</div>
