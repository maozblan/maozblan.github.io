<script lang="ts">
  import { portfolio } from "../portfolio";
  const item = "fireworks";

  import P5 from 'p5-svelte';
  import { sketch } from './sketch.js';
</script>

<div class="fishfolio">
  <h1>{portfolio[item].title}</h1>
  <p>something small, something silly</p>
  <div class="fishfolio-tags row">
    {#each portfolio[item].tags as tag}
      <div>{tag}</div>
    {/each}
  </div>

  <br />

  <p>click to spawn firework</p>
  <div id="firework-display">
    <P5 {sketch} />
  </div>

  <br />

</div>

<style>
  #firework-display {
    border: var(--text) 1px solid;
    padding: 1em;
    width: fit-content;
    height: fit-content;
  }
</style>
