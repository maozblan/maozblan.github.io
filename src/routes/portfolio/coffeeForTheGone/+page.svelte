<script lang="ts">
  import { portfolio } from "../portfolio";
  const item = "coffeeForTheGone";
</script>

<div class="fishfolio">
  <h1>{portfolio[item].title}</h1>

  <p>why don't we chill over a cup of otherworldly coffee</p>
  <div class="fishfolio-tags row">
    <div>{portfolio[item].year}</div>
    {#each portfolio[item].tags as tag}
      <div>{tag}</div>
    {/each}
  </div>

  <br />

  <div class="fishfolio-links row">
    <!-- <a href="https://maozblan.github.io/cmpm-121-demo-1" target="_blank">
      play game in browser</a
    > -->
    <a href="https://github.com/maozblan/cmpm-121-demo-1" target="_blank"
      >source code</a
    >
  </div>

  <br />

  <!-- insert screenshots -->

  <br />

  <p>
    coffee for the gone is a clicker game implemented in HTML/TS and hosted
    github pages. it mimics the vibe of a very liminal coffee shop as the player
    unlocks more and more complicated coffees to attract differe customers.
  </p>

  <p>
    this project was completed by one person (me :D) as a project in my
    university's programming patterns class as a practice for common programming
    patterns and code refactoring.
  </p>
</div>
