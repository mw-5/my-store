import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	/**
	 * @description Represents the shopping cart.
	 */
	cart: Product[] = [];

	// BehaviorSubject is explained in this Angular tutorial:
	// https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
	#cartCount: BehaviorSubject<number> = new BehaviorSubject(0);

	constructor() {}

	/**
	 * @description Add a product to the shopping cart.
	 * @param {Product} product - The product to be added
	 */
	addProduct(product: Product): void {
		// Check if product already exists in cart
		const index = this.cart.findIndex((p) => p.id === product.id);
		if (index === -1) {
			// New product
			this.cart.push(product);
		} else {
			// Product already exists -> only add amount
			this.cart[index].amount += product.amount;
		}

		this.updateCartCount();
	}

	/**
	 * @description Get the products in the shopping cart.
	 * @returns {Product[]} - The products of the cart
	 */
	getProducts(): Product[] {
		return this.cart;
	}

	/**
	 * @description Calculate total amount of cart.
	 * @returns {number} - The total amount of the cart
	 */
	getCartTotal(): number {
		// Return 0 for empty array
		if (this.cart.length == 0) {
			return 0;
		}

		// Return sum of amount * price
		return this.cart
			.map((p) => p.price * p.amount)
			.reduce((previous, current) => previous + current);
	}

	/**
	 * @description: Remove all entries from cart.
	 */
	resetCart(): void {
		this.cart.splice(0);
		this.updateCartCount();
	}

	/**
	 * @description Get the observable number of
	 * items in the cart which is product * amount.
	 * @returns {Observable<number>} - The number of products
	 */
	getCartCount(): Observable<number> {
		return this.#cartCount.asObservable();
	}

	/**
	 * @description Calculate the current number of
	 * items in the cart and inform subscribers.
	 */
	updateCartCount(): void {
		// Calculate new value
		let newValue = 0;
		if (this.cart.length > 0) {
			newValue = this.cart
				.map((p) => p.amount)
				.reduce((accAmount, curAmount) => accAmount + curAmount);
		}

		// Push new value to subscribers
		this.#cartCount.next(newValue);
	}
}
