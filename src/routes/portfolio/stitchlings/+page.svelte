<script lang="ts">
  import { img } from "$lib/img";

  function jumpTo(id: string): void {
    const element = document.getElementById(id);
    if (!element) return;

    const offset =
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 5rem in px

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  }
</script>

<h1>Stitchlings</h1>
<h3>unity c#, concept art, ui || 2025-2026</h3>

<p>
  Stitchlings a co-op hack-n-slash game where two little cloth characters stitch
  up different weapons to their arms to fight their way out of this tiny craft
  stage set and finding trinkets to save their village.
</p>

<button
  class="jump"
  onclick={() => {
    jumpTo("concept-art");
  }}
  >jump to art contributions
</button>
<button
  class="jump"
  onclick={() => {
    jumpTo("ui");
  }}
  >jump to engineering contributions
</button>

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/xlKDBxx47UQ?autoplay=1&mute=1&loop=1&playlist=xlKDBxx47UQ"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<br />
<a
  class="link"
  href="https://store.steampowered.com/app/4200560/Stitchlings/"
  target="_blank"
>
  play on steam (mac & windows)
</a>

<p>
  this project was created on Unity for USC's Advanced Game Programming class.
  it has garnered over 10k unique players and multiple published articles. for
  this project, i worked on both concept art and UI engineering.
</p>

<h2 id="concept-art">Concpet Art</h2>
<p>
  for art, my contributions revolved around both characters and items. i did the
  concept to final turnaround for the level 1 final boss, the forest
  introduction scene, the toy boat prop, and more. i also helped contribute to
  the game's steam achievement icon collection.
</p>
<br />

<div class="row achievements">
  <img src={img.stitch_achievement1} alt="stitchlings achivement icon" />
  <img src={img.stitch_achievement2} alt="stitchlings achivement icon" />
  <img src={img.stitch_achievement3} alt="stitchlings achivement icon" />
</div>
<p class="caption">stitchling achivements for steam</p>

<br />

<div class="col dustclot">
  <img src={img.stitch_dc_turnaround} alt="dust clot turnaround" />
  <div class="row">
    <img src={img.stitch_dc_render} alt="dust clot render" />
    <img src={img.stitch_dc_ingame} alt="dust clot ingame" />
  </div>
</div>
<p class="caption">stitchling level 1 boss final + ingame screenshot</p>

<br />

<div class="col boat">
  <img src={img.stitch_boat1} alt="boat concept1" />
  <img src={img.stitch_boat2} alt="boat concept color" />
  <img src={img.stitch_boat3} alt="boat breakdown" />
</div>
<p class="caption">boat (prop) concept and breakdown for 3d modeler</p>
<br />

<div class="col forest">
  <img src={img.stitch_forestConcept1} alt="forest concept1" />
  <img src={img.stitch_forestConcept2} alt="forest concept color" />
</div>
<p class="caption">forest level entrance concept</p>

<h2 id="ui">UI Engineering</h2>
<p>
  for ui engineering, i spent a lot of time on the game's adventure log system,
  which we call and designed to look like a fieldbook. i also implemented
  animations for the player's health bar and stat buffs. then i worked on
  incorporating and polishing various popups to remind players which keys to
  use, including "revive", "interact", and "select player".
</p>
<br />

<img src={img.stitch_hp} alt="player hp bar animations" />
<p class="caption">player hp bar animations + pfp swapping</p>
<br />

<img src={img.stitch_fieldbook1} alt="stitchlings fieldbook gif" />
<div class="row fieldbook">
  <img src={img.stitch_fieldbook2} alt="stitchlings fieldbook screenshot" />
  <img src={img.stitch_fieldbook3} alt="stitchlings fieldbook screenshot" />
</div>
<p class="caption">in-game adventure log (fieldbook)</p>
<br />

<img src={img.stitch_respawn} alt="player respawn popup" />
<p class="caption">revive pop-up</p>

<style>
  h2 {
    margin-bottom: 0;
  }

  .col {
    gap: 0.5rem;
  }

  .achievements {
    justify-content: space-between;
    > * {
      width: 32%;
    }
  }

  .dustclot {
    .row {
      justify-content: space-between;
      & > * {
        width: 49%;
      }
    }
  }

  .fieldbook {
    margin-top: 0.5rem;
    justify-content: space-between;
    & > * {
      width: 49%;
    }
  }
</style>
