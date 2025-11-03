<script lang="ts">
  import { img } from "$lib/img";
  import { vid } from "$lib/vid";
</script>

<video preload="auto" autoplay={true} loop={true} muted>
  <source src={vid.scaraDemo} type="video/mp4" />
  <track kind="captions" />
  your browser does not support the html video tag :(
</video>

<br />

<p>
  scaramuccia is an art trade piece, designed and created as a parallax
  wallpaper using steam's wallpaper engine. to fit the vibe of a demon trapped
  in the second dimension, he reaches out towards the user and even slightly
  follows your mouse.
</p>

<p>
  the illusration was rendered on a little over 200 layers for shading,
  highlights, and most importantly, breaking the form into multiple layers
  depending on depth. these layers were then individually imported into
  wallpaper engine and tuned with the appropriate amount of parallax to create
  the depth effect. for a bit of added silliness, the parallax was set to
  inverted so the closer objects seem to follow the cursor rather than go away
  from it.
</p>

<p>
  for a better breakdown of the design process, see the <a
    href={img.scaraConcept}
    target="_blank">design concept pdf</a
  >.
</p>

<p>
  character belongs to <a
    href="https://www.instagram.com/rona.eser/"
    target="_blank">rona.eser</a
  > on instagram.
</p>

<br />

<p>
  if for some reason the video does not play, please exit to the portfolio page,
  then select this project again. sorry :(
</p>

<br />

<!-- insert description about process -->
