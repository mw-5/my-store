import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	/**
	 * @description Represents the shopping cart.
	 */
	cart: Product[] = [];

	constructor() {}

	/**
	 * @description Add a product to the shopping cart.
	 * @param {Product} product - The product to be added
	 */
	addProduct(product: Product): void {
		this.cart.push(product);
	}
}
