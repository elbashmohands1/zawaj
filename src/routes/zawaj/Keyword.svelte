<script>
	import Serviceone from './components/Serviceone.svelte';
	import Servicetwo from './components/Servicetwo.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import Servicethree from './components/Servicethree.svelte';
	let {text} = $props();

</script>

	<div class="border-gold border-2  text-gold px-6 bg-gold/10  rounded-full  text-lg font-bold hover:bg-gold/20 flex items-center gap-4 justify-start">
								<span class="text-4xl font-black mt-4">#</span> {text}		
							</div>

