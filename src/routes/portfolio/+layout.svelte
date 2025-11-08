<script lang="ts">
  import { page } from "$app/state";
  let { children } = $props();
</script>

<div class="fishfolio">
  {@render children()}

  {#if page.url.pathname !== "/portfolio"}
    <a href="/portfolio">{`<< return to all projects...`}</a>
  {/if}
</div>
