<script lang="ts">

  import { onMount } from 'svelte';
  import { isMobile, initResponsiveDetection } from '../stores/responsiveStore';
	import { HeroMobile, HeroPc } from '.';
  
  onMount(() => {
    // Initialize responsive detection with 1024px breakpoint (Tailwind's 'lg')
    const cleanup = initResponsiveDetection();
    
    return cleanup; // This will clean up the event listener
  });
</script>

{#if $isMobile}
  <HeroMobile/>
{:else}
  <HeroPc/>
{/if}
