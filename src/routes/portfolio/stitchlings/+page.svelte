<script lang="ts">
  import { img } from "$lib/img";

  function jumpTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
<p class="caption">stitchling level 1 boss concept + ingame screenshot</p>

<br />

<div class="col boat">
  <img src={img.stitch_boat1} alt="boat concept1" />
  <img src={img.stitch_boat2} alt="boat concept color" />
  <img src={img.stitch_boat3} alt="boat breakdown" />
</div>
<p class="caption">boat (decor) concept and breakdown for 3d modeler</p>
<br />

<div class="col forest">
  <img src={img.stitch_forestConcept1} alt="forest concept1" />
  <img src={img.stitch_forestConcept2} alt="forest concept color" />
</div>
<p class="caption">forest level entrance concept</p>

<h2 id="ui">UI Engineering</h2>
<p>under construction</p>

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
</style>
