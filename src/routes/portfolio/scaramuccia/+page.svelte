<script lang="ts">
  import { portfolio } from "../portfolio";
  const item = "scaramuccia";
</script>

<div class="fishfolio">
  <h1>{portfolio[item].title}</h1>

  <p>try, but the screen cannot save you</p>
  <div class="fishfolio-tags row">
    <div>{portfolio[item].year}</div>
    {#each portfolio[item].tags as tag}
      <div>{tag}</div>
    {/each}
  </div>

  <br />

  <div class="fishfolio-links row">
    <a
      href="https://steamcommunity.com/sharedfiles/filedetails/?id=3403015347"
      target="_blank">steam wallpaper engine entry</a
    >
    <!-- <a href="" target="_blank">design document</a> -->
  </div>

  <br />

  <!-- insert video -->

  <br />

  <p>
    scaramuccia is an art trade piece, designed and created as a parallax
    wallpaper using steam's wallpaper engine. to fit the vibe of a demon trapped
    in the second dimension, he reaches out towards the user and even slightly
    follows your mouse.
  </p>

  <p>character belongs to <a href="https://www.instagram.com/rona.eser/" target="_blank">rona.eser</a> on instagram.</p>

  <br />

  <!-- insert description about process -->
</div>
