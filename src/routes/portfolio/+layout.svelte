<script lang="ts">
  import { page } from "$app/state";
  import { portfolio } from "./portfolio";
  import { get } from "svelte/store";
  let { children } = $props();

  // crop to get item key
  function crop(url: string): string | undefined {
    const prefix = "/portfolio";
    if (url.startsWith(prefix)) {
      return url.slice(prefix.length + 1);
    }
    return url;
  }

  let current = $state(crop(page.url.pathname) ?? "");
  let ind = $state(-1);
</script>

{#if page.url.pathname === "/portfolio"}
  <h1>porfolio :)</h1>

  <div id="fishfolio-pieces" class="row">
    <div class="row">
      {#each Object.keys(portfolio) as item}
        <div class="block">
          <a
            class="col"
            href="/portfolio/{item}"
            onclick={() => {
              current = item;
              ind = Object.keys(portfolio).indexOf(item);
            }}
          >
            <img
              src={portfolio[item].icon}
              alt={`${portfolio[item].title} icon`}
            />
          </a>
          <h3>{portfolio[item].title}</h3>
          <p>{portfolio[item].type}</p>
        </div>
      {/each}
    </div>
  </div>
{:else}
  <nav class="row">
    <a href="/portfolio">{`<< return`}</a>
    <a href="/portfolio" style="margin-left: auto;">{`also return >>`}</a>
  </nav>

  <br />

  <div class="fishfolio">
    <h1>{portfolio[current].title}</h1>

    <p>{portfolio[current].tagline}</p>
    <div class="fishfolio-tags row">
      <div>{portfolio[current].year}</div>
      <div>{portfolio[current].type}</div>
      {#each portfolio[current].tags as tag}
        <div>{tag}</div>
      {/each}
    </div>

    <br />

    <div class="fishfolio-links row">
      {#each portfolio[current].links as link}
        <a href={link.href} target="_blank">{link.text}</a>
      {/each}
    </div>

    <br />

    {@render children()}
  </div>
{/if}

<style>
  #fishfolio-pieces {
    justify-content: space-around;
    & > div {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .block {
      text-align: center;
      margin: 1rem;
      width: fit-content;
      height: fit-content;
    }
    img {
      width: 10rem;
      height: auto;
      align-self: center;
      transition:
        width 0.2s,
        height 0.2s;
    }
    a {
      padding: 1rem;
      border: var(--ac) 1px solid;
      transition:
        border-color 0.2s,
        padding 0.2s;
    }
    a:hover {
      padding: 0;
      border-color: transparent;
      img {
        width: 12rem;
        height: auto;
      }
    }
    p {
      margin-top: 0;
    }
    h3 {
      margin-bottom: 0.3rem;
    }
  }
</style>
