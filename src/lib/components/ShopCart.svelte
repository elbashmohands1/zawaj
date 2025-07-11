<script lang="ts">
	import cartStore, { cartActions } from '$lib/stores/cartStore';
	import { onMount } from 'svelte';

	let cartItems = [];
	let subtotal = 0;

	// Subscribe to the cart store to get updates
	onMount(() => {
		const unsubscribe = cartStore.subscribe((cart) => {
			// Convert Map to array for easier iteration in the template
			cartItems = Array.from(cart.values());

			// Calculate subtotal
			subtotal = cartItems.reduce((total, item) => {
				return total + item.product.price * item.quantity;
			}, 0);
		});

		// Cleanup subscription when component is destroyed
		return unsubscribe;
	});

	function removeItem(productId) {
		cartActions.removeFromCart(productId);
	}

	function updateQuantity(productId, newQuantity) {
		cartActions.updateQuantity(productId, newQuantity);
	}

	function clearCart() {
		cartActions.clearCart();
	}
</script>

<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
	<!--
      Background backdrop, show/hide based on slide-over state.
  
      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

	<div class="fixed inset-0 overflow-hidden">
		<div class="absolute inset-0 overflow-hidden">
			<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
				<!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
				<div class="pointer-events-auto w-screen max-w-md">
					<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
						<div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
									Shopping cart
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
										<span class="absolute -inset-0.5"></span>
										<span class="sr-only">Close panel</span>
										<svg
											class="size-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											data-slot="icon"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18 18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div class="mt-8">
								<div class="flow-root">
									<ul role="list" class="-my-6 divide-y divide-gray-200">
										{#if cartItems.length === 0}
											<li class="py-6 text-center">
												<p class="text-gray-500">Your cart is empty</p>
											</li>
										{:else}
											{#each cartItems as item }
												<li class="flex py-6">
													<div
														class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200"
													>
														<img
															src={item.product.imageSrc}
															alt={item.product.imageAlt}
															class="size-full object-cover"
														/>
													</div>
													<div class="ml-4 flex flex-1 flex-col">
														<div>
															<div class="flex justify-between text-base font-medium text-gray-900">
																<h3>
																	<a href="#">{item.product.name}</a>
																</h3>
																<p class="ml-4">${item.product.price.toFixed(2)}</p>
															</div>
															<p class="mt-1 text-sm text-gray-500">{item.product.color}</p>
														</div>
														<div class="flex flex-1 items-end justify-between text-sm">
															<div class="flex items-center">
																<button
																	onclick={() =>
																		updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
																	class="px-2 py-1 text-gray-500 hover:text-gray-700"
																>
																	-
																</button>
																<p class="mx-2 text-gray-500">Qty {item.quantity}</p>
																<button
																	onclick={() =>
																		updateQuantity(item.product.id, item.quantity + 1)}
																	class="px-2 py-1 text-gray-500 hover:text-gray-700"
																>
																	+
																</button>
															</div>

															<div class="flex">
																<button
																	type="button"
																	onclick={() => removeItem(item.product.id)}
																	class="font-medium text-indigo-600 hover:text-indigo-500"
																	>Remove</button
																>
															</div>
														</div>
													</div>
												</li>
											{/each}
										{/if}
									</ul>
								</div>
							</div>
						</div>

						<div class="border-t border-gray-200 px-4 py-6 sm:px-6">
							<div class="flex justify-between text-base font-medium text-gray-900">
								<p>Subtotal</p>
								<p>$262.00</p>
							</div>
							<p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
							<div class="mt-6">
								<a
									href="#"
									class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
									>Checkout</a
								>
							</div>
							<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
								<p>
									or
									<button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
										Continue Shopping
										<span aria-hidden="true"> &rarr;</span>
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
