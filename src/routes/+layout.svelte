<script lang="ts">
  import "@fontsource/anton";
  import "@fontsource/lato";

  let { children } = $props();

  function swapSelectedNav(e: Event) {
    document.querySelectorAll("nav a[data-cur='y']").forEach((el) => {
      el.setAttribute("data-cur", "n");
    });
    const a = e.target as HTMLAnchorElement;
    a.setAttribute("data-cur", "y");
  }
</script>

<div id="everything-bagel" class="fl col">
  <nav class="row">
    <a href="/" onclick={(e) => swapSelectedNav(e)} data-cur="y">home</a>
    <a href="/about" onclick={(e) => swapSelectedNav(e)}>about</a>
    <a href="/portfolio" onclick={(e) => swapSelectedNav(e)}>portfolio</a>
    <a href="/resume" onclick={(e) => swapSelectedNav(e)}>resume</a>
  </nav>

  <main class="col">
    {@render children()}
  </main>

  <div id="foot">portfolio by maozblan; last updated 2025 jan</div>
</div>

<style>
  main {
    flex-grow: 1;
    width: 100%;
    max-width: 800px;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
  }

  #everything-bagel {
    width: 100%;
    height: 100vh;
  }

  nav {
    justify-content: space-around;
    position: fixed;
    width: 100%;
    z-index: 100;
  }
  nav a {
    color: var(--ac);
    background-color: var(--bg);
    border-bottom: var(--ac) 1px solid;
    height: 100%;
    flex-grow: 1;
    font-family: "Anton", sans-serif;
    font-stretch: expanded;
    text-align: center;
    letter-spacing: 0.2rem;
    transition: padding-top 0.2s;
  }
  nav a:hover {
    padding-top: 2.4rem;
  }
  nav a[data-cur="y"] {
    color: var(--text);
    border-bottom: var(--text) 1px solid;
  }
  #foot {
    text-align: center;
    border-top: var(--ac) 1px solid;
    color: var(--ac);
    font-family: "Anton", sans-serif;
    font-stretch: expanded;
    letter-spacing: 0.2rem;
  }
  #foot,
  nav a {
    padding: 1rem;
  }
</style>
