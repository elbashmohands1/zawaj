<script lang="ts">
	interface Props {
		image: string;
		title: string;
		description: string;
		subtitle?: string;
		buttonText?: string;
		buttonLink?: string;
		isReverse?: boolean;
	}
	let { isReverse, image, title, description, buttonText, buttonLink, subtitle }: Props = $props();
</script>

<div class={`mx-auto grid  lg:max-w-7xl max-w-md lg:grid-cols-2 grid-col-1 place-items-center lg:gap-36 gap-10 lg:p-20 p-8  `}>
	<div
		class={`relative  aspect-square size-full overflow-clip rounded-4xl ${isReverse ? 'lg:col-start-2' : ''}`}
	>
		<img class="absolute inset-0 size-full object-cover" alt={title} src={image} />
	</div>
	<div class={`${isReverse ? 'lg:row-start-1' : ''}`}>
		{#if subtitle}
			<p class="mb-4 font-bold">{subtitle}</p>
		{/if}
		<h3 class="mb-4 lg:text-5xl text-4xl font-bold">{title}</h3>
		<p class="mb-16 text-xl text-muted-foreground">{description}</p>
		{#if buttonText}
			<button
				class="hover:bg-primary hover:text-foreground rounded-full bg-foreground p-4 px-12 font-bold text-background dark:hover:text-black"
			>
				<a class="hover:decoration-0 flex items-center gap-2 " href={buttonLink}>{buttonText}
					<span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M3.70605 8H13.0394" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.37305 3.33337L13.0397 8.00004L8.37305 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
					</span>
				</a>
			
			</button>
		{/if}
	</div>
</div>
