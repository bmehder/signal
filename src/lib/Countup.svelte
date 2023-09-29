<script>
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  const SLAVERY = 40_300_000
  const LABOR = 24_900_000
  const MARRIAGE = 15_400_000

  const slavery = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  })

  const labor = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  })
  
  const marriage = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  })

  const init = () => {
    slavery.set(SLAVERY)
    labor.set(LABOR)
    marriage.set(MARRIAGE)
  }
</script>

<div class="flex countup bg-accent">
  <div>
    <p class="h2" use:init>{parseInt($slavery).toLocaleString()}+</p>
    <p>Victims of Modern Slavery</p>
  </div>
  <div>
    <p class="h2" use:init>{parseInt($labor).toLocaleString()}+</p>
    <p>Victims in Forced Labor</p>
  </div>
  <div>
    <p class="h2" use:init>{parseInt($marriage).toLocaleString()}+</p>
    <p>Victims in Forced Marriage</p>
  </div>
</div>

<style>
  .countup {
    justify-content: center;
    padding: var(--size);
    text-align: center;
  }
</style>
