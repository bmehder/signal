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

  const countup = node => {
    const options = { threshold: 0.9 }

    const setNewStoreValues = x => {
      if (x.isIntersecting) {
        slavery.set(SLAVERY)
        labor.set(LABOR)
        marriage.set(MARRIAGE)
      }
    }

    const observer = new IntersectionObserver(
      xs => xs.forEach(setNewStoreValues),
      options
    )

    observer.observe(node)
  }
</script>

<div use:countup class="countup bg-accent">
  <div class="inner flex">
    <div>
      <p class="h2">{parseInt($slavery).toLocaleString()}+</p>
      <p>Victims of Modern Slavery</p>
    </div>
    <div>
      <p class="h2">{parseInt($labor).toLocaleString()}+</p>
      <p>Victims in Forced Labor</p>
    </div>
    <div>
      <p class="h2">{parseInt($marriage).toLocaleString()}+</p>
      <p>Victims in Forced Marriage</p>
    </div>
  </div>
</div>

<style>
  .countup {
    justify-content: center;
    padding: var(--size);
    text-align: center;
  }
</style>
