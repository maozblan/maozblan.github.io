<script>
  import { img } from '$lib/img';
  import "@fontsource/anton";
  import "@fontsource/lato";

  let { children } = $props();
</script>

<div style={`
  @font-face {
    font-family: 'Anton';
  }
  ul {
    list-style-image: url(${img.tringle_list});
  }
`}></div>

<div id="everything-bagel" class="fl col">
  <div class="sticky">
    <nav class="row">
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/portfolio">portfolio</a>
      <a href="/resume">resume</a>
    </nav>
  </div>

  <main class="col">
    {@render children()}
  </main>

  <div id="foot">portfolio by maozblan; last updated 2025 jan</div>
</div>

<style>
  nav {
    justify-content: space-around;
  }

  main {
    flex-grow: 1;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  }

  #everything-bagel {
    width: 100vw;
    height: 100vh;
  }

  #foot {
    text-align: center;
  }

  #foot, nav {
    padding: 1rem;
  }
</style>
