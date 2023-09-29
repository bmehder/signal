<script>
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import { page } from '$app/stores'
  import Header from '$lib/Headers/Header.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  // export let data

  const mobileThreshold = 1250
</script>


<div class="wrapper">
  <Header {mobileThreshold} />

  <main id="main-content">
    <slot />
  </main>

  <Footer />
</div>

<BackToTop />

<!-- {#if !data.rfhPopup}
  <Popover delay="2000">
    <h2>My content</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nam dignissimos
      asperiores, neque eaque sequi pariatur ex blanditiis accusantium iusto eveniet dolor
      nihil molestias autem soluta dicta doloribus eius voluptates officia rerum placeat
      mollitia deleniti ab facilis? Quam mollitia exercitationem officia, perspiciatis
      nihil iste fugiat eum tenetur nemo debitis magni.
    </p>
  </Popover>
{/if} -->

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    /* width: var(--width); */
    /* max-width: var(--max-width); */
    /* padding-block-start: var(--double-size); */
    /* margin-inline: auto; */
    line-height: 1.6;
  }
</style>
