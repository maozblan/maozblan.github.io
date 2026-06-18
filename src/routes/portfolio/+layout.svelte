<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  let { children } = $props();

</script>

<div id="fishfolio">
  {#if !page.url.pathname.endsWith('portfolio')}
    <a href={resolve("/portfolio")}>{`<< return to project list`}</a>
  {/if}

  {@render children()}

  {#if !page.url.pathname.endsWith('portfolio')}
    <a href={resolve("/portfolio")}>{`<< return to project list`}</a>
  {/if}
</div>

<style>
</style>
