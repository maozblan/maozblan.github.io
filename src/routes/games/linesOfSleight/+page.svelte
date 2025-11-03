<script lang="ts">
  import { img } from "$lib/img";
  import { vid } from "$lib/vid";
</script>

<video preload="auto" autoplay={true} loop={true} muted>
  <source src={vid.losDemo} type="video/mp4" />
  <track kind="captions" />
  your browser does not support the html video tag :(
</video>

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
  class at my university. this is what we collectively made with the given theme
  "dexterity domain," using the unity game engine. on the team, i was in charge
  of the user interface, incorporating all interface implementation and
  illustrating all interface related art assets (along with key art).
</p>

<p>
  with the art split between two artists, we drew inspiration from the other to
  keep the themes and colors consistent. eventhough we both had very different
  art styles, splitting the art by where the art appeared (interface vs game
  assets) allowed both styles to fit together quite nicely. favorite art pieces
  were definitely the cards; favorite design was the tokens :D
</p>

<br />

<!-- talk about personal contributions with screenshots -->

<div class="screenshot col">
  <img src={img.los2} alt="cover art" />
  <img src={img.los1} alt="boss fight" />
  <img src={img.los3} alt="deck building" />
</div>

<br />

<style>
  .screenshot img:not(:first-child) {
    margin-top: 1em;
  }
</style>
