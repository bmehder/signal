<script>
  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'

  const logo = '<img src="/logo.webp" alt="Share The Signal Logo" />'

  export let mobileThreshold = 1250

  let innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < mobileThreshold}
  <MobileHeader {logo} />
{:else}
  <DesktopHeader {logo} />
{/if}