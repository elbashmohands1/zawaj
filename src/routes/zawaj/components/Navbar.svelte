<script lang="ts">
	import DarkmodeButton from "$lib/components/DarkmodeButton.svelte";
	import { Logo, MobileNav, MobileNavTrigger, NavbarBig } from ".";

 
	let navState = false;

    function toggle(){
        navState = !navState;
    }

</script>

<div class="sticky top-0 z-50 w-full bg-background">
		<nav
			class=" mx-auto flex max-w-2xl items-center justify-between px-6 lg:px-12 py-5 font-bold lg:max-w-7xl "
		>
			<Logo class="lg:w-36 w-32" />
			<NavbarBig class="hidden w-full  lg:flex   " />
			<MobileNavTrigger onclick={toggle}/>
			{#if navState}
				<MobileNav onclick={toggle}   />
			{/if}
<div class="ms-4">
				<DarkmodeButton/>
	
</div>	
	</nav>
</div>

