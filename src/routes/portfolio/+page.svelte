<script>
  import { portfolio } from "./portfolio";
</script>

<h1>porfolio :)</h1>

<div id="portfolio-pieces">
  {#each Object.keys(portfolio) as item}
    <div class="block">
      <a href="/portfolio/{item}">{portfolio[item].title}</a>
    </div>
  {/each}
</div>