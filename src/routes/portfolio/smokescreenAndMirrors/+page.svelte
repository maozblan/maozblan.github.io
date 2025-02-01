<script lang="ts">
  import { img } from "$lib/img";
</script>

<div class="pewpew screenshot col">
  <img src={img.sam2} alt="in game" />
  <img src={img.sam1} alt="tutorial" />
</div>

<br />

<p>
  you are cat. you are mirror cat. there are bullets. there are spikes. do not
  let either cat die. that is all.
</p>

<p>
  smokescreen and mirrors is an endless runner created for my game development
  class at my university. it is a single person project coded completely in
  phaser.js. all art assets, sounds assets, and code are made by unless
  otherwise cited (took a couple of sound effects like the meowwww).
</p>

<br />

<style>
  .pewpew img {
    width: 60%;
  }

  .pewpew img:last-child {
    margin-top: 1em;
    align-self: flex-end;
  }
  .pewpew img:first-child {
    align-self: flex-start;
  }
</style>
