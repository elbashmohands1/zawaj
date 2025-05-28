import { writable, derived } from 'svelte/store';

interface CartItem {
	title: string;
	price: string;
	image: string;
}

function createCartStore() {
	const { subscribe, update } = writable<CartItem[]>([]);

	return {
		subscribe,
		addItem: (item: CartItem) => {
			update((items) => [...items, item]);
		},
		removeItem: (title: string) => {
			update((items) => items.filter((item) => item.title !== title));
		}
	};
}

export const cart = createCartStore();

export const cartTotal = derived(cart, ($cart) => {
	return $cart.reduce((total, item) => {
		const price = parseFloat(item.price);
		return total + (isNaN(price) ? 0 : price);
	}, 0);
});
