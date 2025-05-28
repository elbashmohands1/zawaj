<script lang="ts">
	interface Item {
		image: string;
		title: string;
		color: string[];
		price: string|number;
	}
	let{image,title,color,price}:Item=$props()
	
</script>

<div class="group relative">
			<div class="relative">
				<div class="absolute top-2/3  py-4 px-6 rounded-2xl font-semibold bg-background/80 opacity-0 group-hover:opacity-100 z-10 cursor-pointer ">Show me</div>
					<img
						src={image}
						alt={title}
						class=" aspect-square lg:aspect-auto lg:h-80 w-full rounded-md object-cover md:group-hover:scale-105  bg-foreground/75 transition-all"
					/>
			</div>
				<div class="mt-4 flex justify-between">
					<div>
						<h3 class="text-sm text-foreground/80">
							<a href="/">{title}</a>
						</h3>
						<div class="mt-1 text-sm text-foreground/50">
							<ul>

							{#each color as c }
								
								<li class={`p-2 rounded-full inline-block ms-1  border-1`} style={`background-color: ${c}`} ></li>
								
							{/each}
						</ul>

						</div>
					</div>
					<p class="text-sm font-medium text-foreground">{price}$</p>
				</div>
			</div>

