<script>
  let { children } = $props();
</script>

<nav class="row">
  <a href="/">home</a>
  <a href="/about">about</a>
  <a href="/portfolio">portfolio</a>
  <a href="/resume">resume</a>
</nav>

{@render children()}

<style>
  nav {
    justify-content: space-around;
  }
</style>