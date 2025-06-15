<script lang="ts">

	let {onclick}=$props();
  

</script>

<div class="flex items-center justify-center gap-2 lg:hidden">
			<div><a href="/" class="px-3 font-bold">English</a></div>
			<button
				class="size-7 cursor-pointer"
				aria-label="navmenu"
				{onclick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path></svg
				>
			</button>
		</div>

