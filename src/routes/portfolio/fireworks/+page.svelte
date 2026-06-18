<script lang="ts">
  import P5 from "p5-svelte";
  import { sketch } from "./sketch.js";
</script>

<h1>L-system fireworks</h1>
<h3>javascript procedural art || 2025</h3>

<div class="col firework">
  <p>click in the box to spawn firework</p>
  <div id="firework-display">
    <P5 {sketch} />
  </div>
</div>

<br />

<p>
  calm firework display where the user can play around with all sorts of cool,
  abstract fireworks. the aim is to create something artistic using common
  generative methods. the current firework show includes the dragon curve, the
  fractal tree, along with broken variations with each.
</p>

<p>
  this is an interactive media project coded in p5.js, utilizing different
  l-systems to draw fireworks. this was a single person project started in my
  creative coding class at my university.
</p>

<style>
  #firework-display {
    border: var(--ac) 1px solid;
    padding: 1em;
    width: fit-content;
    height: fit-content;
  }
  .firework {
    width: 100%;
    align-items: center;
  }
</style>
