<script>
	import { SplideSlide } from "@splidejs/svelte-splide";
	let{image,title,description}=$props()

</script>

 <SplideSlide>
    	<div class="relative flex flex-col justify-center items-center ">
						<img src={image} alt={title} class="absolute md:size-28 size-20 rounded-full bg-cover top-4">
						<img src="ray.avif " alt="shape" >
						<div class="absolute flex flex-col items-center md:max-w-md max-w-xs md:top-38 top-26 text-center">
							<h3 class="md:text-3xl text-2xl font-black text-gold md:mb-8 mb-4">{title} </h3>
							<p class="text-sm md:text-[1.1rem]"> {description}
						</div>
					</div>
  </SplideSlide>

