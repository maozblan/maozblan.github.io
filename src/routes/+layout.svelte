<script lang="ts">
  import { page } from "$app/state";
  import "@fontsource/anton";
  import "@fontsource/lato";
  import icon32 from "$lib/favicon-32x32.png";
  import icon16 from "$lib/favicon-16x16.png";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
  <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
</svelte:head>

<div id="everything-bagel" class="fl col">
  <nav class="row">
    <a href="/" class:active={page.url.pathname === "/"}>home</a>
    <a href="/games" class:active={page.url.pathname === "/games"}>games</a>
    <a href="/art" class:active={page.url.pathname === "/art"}>art</a>
  </nav>

  <main class="col">
    {@render children()}
  </main>

  <div id="foot">
    <p>portfolio by maozblan; last updated 2025 nov</p>
    <p id="secret">happiness is inevitable :]</p>
  </div>
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
    user-select: none;
    a {
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
      &:hover,
      &:active {
        padding-top: 2.4rem;
        text-decoration: none;
      }
      &.active {
        color: var(--text);
        border-bottom: var(--text) 1px solid;
      }
    }
  }
  #foot {
    text-align: center;
    border-top: var(--ac) 1px solid;
    color: var(--ac);
    p {
      font-family: "Anton", sans-serif;
      font-stretch: expanded;
      letter-spacing: 0.2rem;
    }
    #secret {
      font-size: 0;
      transition: font-size 3s;
    }
    &:hover #secret {
      font-size: 1rem;
    }
  }
  #foot,
  nav a {
    padding: 1rem;
  }
</style>
