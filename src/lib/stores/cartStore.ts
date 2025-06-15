import { writable } from 'svelte/store';
import type { Product } from '../products';

export type CartItem = {
	product: Product;
	quantity: number;
};

export type Cart = Map<string, CartItem>;

// Create a writable store with an empty Map as initial value
const cartStore = writable<Cart>(new Map());

// Helper functions to manipulate the cart
export const cartActions = {
	// Add a product to the cart
	addToCart: (product: Product) => {
		cartStore.update((cart) => {
			const existingItem = cart.get(product.id);

			if (existingItem) {
				// If product already exists, increase quantity
				existingItem.quantity += 1;
				cart.set(product.id, existingItem);
			} else {
				// If product doesn't exist, add it with quantity 1
				cart.set(product.id, { product, quantity: 1 });
			}

			return cart;
		});
	},

	// Remove a product from the cart
	removeFromCart: (productId: string) => {
		cartStore.update((cart) => {
			cart.delete(productId);
			return cart;
		});
	},

	// Update quantity of a product in the cart
	updateQuantity: (productId: string, quantity: number) => {
		cartStore.update((cart) => {
			const item = cart.get(productId);
			if (item) {
				if (quantity <= 0) {
					cart.delete(productId);
				} else {
					item.quantity = quantity;
					cart.set(productId, item);
				}
			}
			return cart;
		});
	},

	// Clear the entire cart
	clearCart: () => {
		cartStore.set(new Map());
	}
};

export default cartStore;
