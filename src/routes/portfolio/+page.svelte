<script lang="ts">
  import { resolve } from "$app/paths";
  import { portfolio } from "./portfolio";

</script>
<h1>porfolio :)</h1>

<div id="fishfolio-pieces" class="row">
  <div class="row">
    {#each Object.keys(portfolio) as item}
      <div class="block">
        <a
          class="col"
          href={resolve(`/portfolio/${item}`)}
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
