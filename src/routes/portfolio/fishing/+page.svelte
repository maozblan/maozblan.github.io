<script lang="ts">
  import { img } from "$lib/img";
</script>

<h1>FiSHiNG</h1>
<h3>unity c# || 2026</h3>

<p>
  FiSHiNG is a single person point-n-click single player poker fishing game.
  score the highest and earn the trophy for this year's fishing competition!!
</p>

<img class="screenshot" src={img.fishing2} alt="click fish gif" />
<p class="caption">special fish (ice fish) gameplay</p>

<br />

<img class="screenshot" src={img.fishing3} alt="scoring gif" />
<p class="caption">scoring against npc opponent</p>

<br />

<img class="screenshot" src={img.fishing1} alt="bts cutscene gif" />
<p class="caption">cutscene paperstorytelling style, behind the scenes</p>

<p>
  this project was a 2 person project created for USC's Intermediate Game Design
  project. i worked mostly on the UI engieering, plus all of the art. thus, i
  got to define the whole game style, both in art and UI :D
</p>

<a
  class="link"
  href="https://store.steampowered.com/app/4200560/Stitchlings/"
  target="_blank">executable on itch (mac & windows)</a
>

<h2>Selected Art</h2>

<img class="screenshot" src={img.fishing4} alt="bts cutscene gif" />
<br />
<img class="screenshot" src={img.fishing5} alt="bts cutscene gif" />
<br />
<div class="art row">
  <img class="screenshot" src={img.fishing6} alt="bts cutscene gif" />
  <img class="screenshot" src={img.fishing7} alt="bts cutscene gif" />
</div>

<style>
  .art.row {
    justify-content: space-between;
    & > * {
      width: 48%;
    }
  }
</style>
