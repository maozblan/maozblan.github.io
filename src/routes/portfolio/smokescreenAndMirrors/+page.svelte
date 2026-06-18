<script lang="ts">
  import { img } from "$lib/img";
</script>

<h1>smokescreen & mirrors</h1>
<h3>javascript phaser.js || 2024</h3>

<img class="screenshot" src={img.sam3} alt="gameplay gif" />
<br />

<p>
  you are cat. you are mirror cat. there are bullets. there are spikes. do not
  let either cat die. that is all.
</p>

<a
  class="link"
  href="https://maozblan.github.io/smokescreen-and-mirrors/"
  target="blank">play on browser</a
>

<p>
  smokescreen and mirrors is an endless runner created for my game development
  class at my university. it is a single person project coded completely in
  phaser.js. all art assets, sounds assets, and code are made by unless
  otherwise cited (took a couple of sound effects like the meowwww).
</p>

<br />

<div class="pewpew screenshot col">
  <img src={img.sam2} alt="in game" />
  <img src={img.sam1} alt="tutorial" />
</div>

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
