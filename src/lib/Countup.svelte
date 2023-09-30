<script>
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import { observer } from '$lib/utils.js'

  const SLAVERY = 40_300_000
  const LABOR = 24_900_000
  const MARRIAGE = 15_400_000

  const tweenOptions = {
    duration: 2000,
    easing: cubicOut,
  }

  const slavery = tweened(0, tweenOptions)
  const labor = tweened(0, tweenOptions)
  const marriage = tweened(0, tweenOptions)

  const countup = () => {
    slavery.set(SLAVERY)
    labor.set(LABOR)
    marriage.set(MARRIAGE)
  }

  const countdown = () => {
    slavery.set(0)
    labor.set(0)
    marriage.set(0)
  }

  const callbacks = {
    in: countup,
    out: countdown,
  }
</script>

<div use:observer={callbacks} class="countup center bg-accent">
  <div class="inner flex">
    <div>
      {#if $slavery === 0}
        <p class="h2">-</p>
      {:else}
        <p class="h2">{parseInt($slavery).toLocaleString() + '+'}</p>
      {/if}
      <p>Victims of Modern Slavery</p>
    </div>
    <div>
      {#if $labor === 0}
        <p class="h2">-</p>
      {:else}
        <p class="h2">{parseInt($labor).toLocaleString() + '+'}</p>
      {/if}
      <p>Victims in Forced Labor</p>
    </div>
    <div>
      {#if $marriage === 0}
        <p class="h2">-</p>
      {:else}
        <p class="h2">{parseInt($marriage).toLocaleString() + '+'}</p>
      {/if}
      <p>Victims in Forced Marriage</p>
    </div>
  </div>
</div>

<style>
  .countup {
    padding: var(--size);
  }
</style>
