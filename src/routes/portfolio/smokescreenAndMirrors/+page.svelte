<script lang="ts">
  import { portfolio } from "../portfolio";
  const item = "smokescreenAndMirrors";
</script>

<div class="fishfolio">
  <h1>{portfolio[item].title}</h1>

  <p>meow meow meow, pew pew pew</p>
  <div class="fishfolio-tags row">
    <div>{portfolio[item].year}</div>
    {#each portfolio[item].tags as tag}
      <div>{tag}</div>
    {/each}
  </div>

  <br />

  <div class="fishfolio-links row">
    <!-- <a
      href="https://maozblan.github.io/smokescreen-and-mirrors/"
      target="_blank">play in browser</a
    > -->
    <a
      href="https://github.com/maozblan/smokescreen-and-mirrors"
      target="_blank">soure code</a
    >
  </div>

  <br />

  <!-- insert screenshoots -->

  <br />

  <p>
    you are cat. you are shadow cat. there are bullets. there are spikes. try to
    survive. that is all.
  </p>

  <p>
    smokescreen and mirrors is an endless runner created for my game development
    class at my university. it is a single person project coded completely in
    phaser.js. all art assets, sounds assets, and code are made by unless
    otherwise cited (took a couple of sound effects like the meowwww).
  </p>

  <br />
</div>
