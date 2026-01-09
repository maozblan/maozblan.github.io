<script lang="ts">
  import { maxPointValue, portfolio } from "./portoflio";

  let selected: null | Project = $state(null);
</script>

<div class="row" id="project-graph">
  <div id="graph">
    <div class="x-axis axis">technical</div>
    <div class="y-axis axis">creative</div>
    {#each portfolio as point}
      <button
        class="point {point.tags.join()}"
        style="
				left: {(point.location.technical / maxPointValue) * 100}%;
				bottom: {(point.location.creative / maxPointValue) * 100}%;
				"
        onclick={() => {
          selected = point;
        }}
      ></button>
    {/each}
  </div>

	<!-- TODO will need to build a filter somewhere at some point -->

  <div id="quick-peek" class="col">
		{#if selected != null}
			<h1>{selected.title}</h1>
			<p>{selected.date}</p>
			<p>{selected.tags.join(', ')}</p>
			<img src={selected.cover} alt="{selected.title} display art" />
			<p>{selected.summary}</p>
			<a href="/portfolio/{selected.id}">{`more info >>`}</a>
		{:else}
			<div>Select a point to get started!</div>
		{/if}
	</div>
</div>

<style>
  #project-graph {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  #graph {
    position: relative;
    --s: 500px;
    --b: 5px;
    width: var(--s);
    height: var(--s);
    margin-right: 3rem;

    * {
      position: absolute;
    }

    .axis {
      width: 100%;
      text-align: center;
    }

    .y-axis {
      left: -50%;
      top: calc(var(--s) / 2);
      border-bottom: var(--b) solid var(--text);
      transform: translateY(-50%) rotate(-90deg) translateY(-50%)
        translateY(calc(1 * var(--b)));
    }
    .x-axis {
      bottom: 0;
      border-top: var(--b) solid var(--text);
      transform: translateY(100%) translateY(calc(-1 * var(--b)));
    }

    .point {
      padding: 0;
      width: 1rem;
      aspect-ratio: 1/1;
      background-color: var(--ac);
      /* easeInOutBack from easing.net */
      transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);

      &:hover {
        border-color: transparent;
        transform-origin: center;
        scale: 2;
      }
    }
  }

	#quick-peek {
    width: 600px;
    
    h1 {
      margin-bottom: 0;
    }

		img {
			width: 50%;
		}
	}
</style>
