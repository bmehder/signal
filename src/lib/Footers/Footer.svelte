<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import Instagram from '$lib/icons/Instagram.svelte'
  import Youtube from '$lib/icons/Youtube.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-light">
  <div class="inner">
    © Copyright {currentYear}. All rights reserved.
  </div>
</footer>

<style>
  .inner {
    width: var(--width);
    padding-block: var(--double-size);
  }
</style>
